import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import bgVid from "./COS-BG.mp4";
import axios from "axios";
import useSWR from "swr";
import { AuthContext } from "../../context/authContext"; // Adjust path as needed
import Signin from "../Signin";


const Quiz = () => {
  // State declarations
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [teamName, setTeamName] = useState("");
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [quizAllowed, setQuizAllowed] = useState(false);
  const audioRef = useRef(null);

  // Auth context and navigation
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // SWR for leaderboard
  const fetcher = () =>
    axios
      .get("https://new-rep-uw0m.onrender.com/api/v1/quiz/leaderboard", {
        headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` },
      })
      .then((res) => res.data);
  const { data: leaderboard, mutate } = useSWR(
    isLoggedIn ? "scores" : null,
    fetcher,
    { refreshInterval: 5000 }
  );

  // Load state from localStorage on mount
  useEffect(() => {
    if (isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      const scholarID = userData.currentUser?.scholar_ID || null;
      const savedState = JSON.parse(localStorage.getItem(`quizState_${scholarID}`)) || {};

      if (savedState.hasAttempted) {
        setHasAttempted(true);
      }

      if (savedState.isQuizStarted && !savedState.hasAttempted) {
        setQuestions(savedState.questions || []);
        setCurrentQuestion(savedState.currentQuestion || 0);
        setScore(savedState.score || 0);
        setQuizFinished(savedState.quizFinished || false);
        setUserAnswers(savedState.userAnswers || []);
        setTeamName(savedState.teamName || "");
        setIsQuizStarted(savedState.isQuizStarted || false);
      }
    }
  }, [isLoggedIn]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isLoggedIn && isQuizStarted) {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      const scholarID = userData.currentUser?.scholar_ID || null;
      const quizState = {
        currentQuestion,
        score,
        quizFinished,
        userAnswers,
        teamName,
        isQuizStarted,
        hasAttempted,
      };
      localStorage.setItem(`quizState_${scholarID}`, JSON.stringify(quizState));
    }
  }, [currentQuestion, score, quizFinished, userAnswers, teamName, isQuizStarted, hasAttempted, isLoggedIn]);

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  // Fetch questions when quiz starts
  useEffect(() => {
    if (isLoggedIn && isQuizStarted && questions.length === 0) {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get("https://new-rep-uw0m.onrender.com/api/v1/quiz/questions", {
            headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` },
          });
          setQuestions(response.data);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
      fetchQuestions();
    }
  }, [isLoggedIn, isQuizStarted, questions.length]);

  // Autoplay audio when question changes
  useEffect(() => {
    if (
      isQuizStarted &&
      questions.length > 0 &&
      questions[currentQuestion]?.questionType === "audio" &&
      audioRef.current
    ) {
      console.log("autoplaying audio");
      // Pause any ongoing playback
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset playback
  
      // Wait for the audio to load before playing
      const playAudio = async () => {
        try {
          await audioRef.current.play();
        } catch (err) {
          console.log("Autoplay blocked:", err);
          setTimeout(() => audioRef.current.play(), 100); // Retry after delay
        }
      };
  
      // Ensure the new source is loaded before playing
      audioRef.current.oncanplaythrough = playAudio;
      audioRef.current.load();
    }
  }, [isQuizStarted, currentQuestion, questions]);

  // Quiz timer: Manage quiz window from 19:00 to 20:00 (7 PM to 8 PM) for testing
  useEffect(() => {
    const updateQuizTimer = () => {
      const now = new Date();
      // For testing: set quiz start at 19:00 and end at 20:00
      const startTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        22, 0, 0
      );
      const endTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        22, 10, 0
      );

      if (now < startTime) {
        // Before quiz start: show countdown until quiz starts
        setQuizAllowed(false);
        const diff = startTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else if (now >= startTime && now < endTime) {
        // Active quiz window: show countdown until quiz ends
        setQuizAllowed(true);
        const diff = endTime - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else {
        // After quiz window ends.
        setQuizAllowed(false);
        setTimeRemaining("00:00:00");
        if (isQuizStarted && !quizFinished) {
          setQuizFinished(true);
        }
      }
    };

    updateQuizTimer();
    const timerId = setInterval(updateQuizTimer, 1000);
    return () => clearInterval(timerId);
  }, [isQuizStarted, quizFinished]);

  // Prevent text copying and context menu
  useEffect(() => {
    const preventCopy = (e) => {
      if (e.target.closest(".no-copy")) {
        e.preventDefault();
      }
    };

    const preventContextMenu = (e) => {
      if (e.target.closest(".no-copy")) {
        e.preventDefault();
      }
    };

    document.addEventListener("copy", preventCopy);
    document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  // Start quiz manually after team name entry: Allow starting only if within quiz window.
  const startQuiz = () => {
    if (!quizAllowed) {
      alert("Quiz can only be started after 11 PM");
      return;
    }
    if (teamName.trim() && !hasAttempted) {
      setIsQuizStarted(true);
    } else if (hasAttempted) {
      alert("You have already attempted the quiz.");
    } else {
      alert("Please enter your team name to start the quiz.");
    }
  };




  // Submit answer: Allow submission only during the quiz window.
  const handleSubmit = async () => {
    if (!quizAllowed) {
      alert("Quiz time is over. No more submissions allowed.");
      return;
    }
    if (!questions.length) return;

    const currentQ = questions[currentQuestion];
    const isCorrect =
      userAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase();
    const answerData = {
      questionId: currentQ._id,
      userAnswer: userAnswer.trim().toLowerCase(),
      isCorrect,
    };

    setUserAnswers((prev) => [...prev, answerData]);
    setUserAnswer("");

    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setQuizFinished(true);
      }

      try {
        await axios.post(
          "https://new-rep-uw0m.onrender.com/api/v1/quiz/leaderboard",
          { userName: teamName, score: newScore },
          { headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` } }
        );
        mutate();
      } catch (error) {
        console.error("Error updating leaderboard:", error);
      }
    }
  };

  // Store result and mark as attempted
  const storeResult = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      const scholarID = userData.currentUser?.scholar_ID || null;

      const resultData = {
        username: teamName,
        scholar_ID: scholarID,
        answers: userAnswers,
        attempts: 1,
        points: score,
        completedAt: new Date().toISOString(),
      };

      await axios.post("https://new-rep-uw0m.onrender.com/api/v1/quiz/results", resultData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` },
      });
      setHasAttempted(true);
    } catch (error) {
      console.error("Error storing result:", error);
    }
  };

  // Trigger result storage when quiz finishes
  useEffect(() => {
    if (quizFinished) storeResult();
  }, [quizFinished]);

  // Restart quiz (disabled if already attempted)
  const restartQuiz = () => {
    if (hasAttempted) {
      alert("You cannot restart the quiz as you have already attempted it.");
      return;
    }
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setUserAnswer("");
    setUserAnswers([]);
    setIsQuizStarted(false);
    setTeamName("");
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    const scholarID = userData.currentUser?.scholar_ID || null;
    localStorage.removeItem(`quizState_${scholarID}`);
  };

  // Render: Not logged in
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-blue-900 z-50">
        <Signin />
        <p className="text-center text-white mt-4">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    );
  }


  // Render: Team name entry screen or attempted message
// Render: Team name entry screen with quiz rules
  if (!isQuizStarted) {
    return (
      <div className="fixed p-4 inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-blue-900 z-50">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Enter Your Team Name
          </h2>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-4 mb-4 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            placeholder="Team Name"
          />
          <div className="mb-6 text-white text-left">
            <h3 className="font-bold mb-2">Quiz Rules:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The quiz will run during the allotted time window.</li>
              <li>Answer all questions to the best of your ability.</li>
              <li>Do not use AI tools, chatbots, or any external help; your answer must reflect your own understanding.</li>
              <li>Try avoiding filler words, unnecessary articles (e.g., "the"), and extra spaces.</li>
              <li>Questions where two or more answers are asked add only one space between the words.</li>
              <li>Keep your answers concise and precise.</li>
              <li>No backtracking allowed once an answer is submitted.</li>
            </ul>
          </div>
          <button
            onClick={startQuiz}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg uppercase tracking-wide hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Render: Main quiz UI
  return (
    <div className="fixed mobile:absolute w-screen min-h-screen bg-slate-900 text-white overflow-hidden z-50">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="object-cover w-full h-full opacity-30">
          <source src={bgVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-blue-900/10 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            {teamName}
          </h1>
          <div className="text-2xl font-semibold text-blue-400">
            Time Remaining: <span className="text-purple-400">{timeRemaining}</span>
          </div>
        </header>

        <div className="flex gap-6">
          <section className="w-[70%] mobile:w-full">
            <div className="mobile:h-fit bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-8 h-[70vh] overflow-y-auto [scrollbar-width:none]">
              {!quizFinished ? (
                <div className="space-y-8">
                  <div className="flex justify-between text-lg font-bold text-blue-400  bg-slate-800/70 backdrop-blur-xl z-10 py-2">
                    <span>Question {currentQuestion + 1} / {questions.length}</span>
                    <span>Score: {score}</span>
                  </div>
                  {questions.length > 0 && (
                    <div className="space-y-6 no-copy" style={{ userSelect: "none" }}>
                      <h2 className="text-3xl mobile:text-sm mobile:font-medium font-semibold text-white mb-8 leading-relaxed whitespace-pre-wrap">
                        {questions[currentQuestion].questionText}
                      </h2>
                      {questions[currentQuestion].questionType === "image" &&
                        questions[currentQuestion].mediaUrl && (
                          <img
                            src={questions[currentQuestion].mediaUrl}
                            alt="Question media"
                            className="max-w-full h-auto rounded-lg shadow-md"
                          />
                        )}
                      {questions[currentQuestion].questionType === "audio" &&
                        questions[currentQuestion].mediaUrl && (
                          <audio
                            ref={audioRef}
                            controls
                            autoPlay
                            className="w-full"
                            onError={(e) => console.error("Audio error:", e.nativeEvent)}
                          >
                            <source src={questions[currentQuestion].mediaUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        )}
                    </div>
                  )}
                  <div className="space-y-6">
                    <input
                      type="text"
                      value={userAnswer}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Type your answer here..."
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={!questions.length}
                      className="mobile:text-sm w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg uppercase tracking-wide hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Answer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-8">
                  <h2 className="text-4xl font-bold text-white">Quiz Completed!</h2>
                  <p className="text-2xl text-blue-400">
                    Your Score: <span className="text-purple-400">{score}</span> / {questions.length}
                  </p>
                  <button
                    onClick={() => navigate("/")}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg uppercase tracking-wide hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Go to Homepage
                  </button>
                </div>
              )}
            </div>
          </section>

          <aside className="w-[30%] mobile:w-full">
            <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-6 h-[70vh] flex flex-col">
              <h3 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Leaderboard
              </h3>
              {leaderboard && (
                <div className="space-y-3 overflow-y-auto flex-1 [scrollbar-width:none]">
                  {leaderboard.map((item, index) => (
                    <div
                      key={item.userName}
                      className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold text-blue-400">#{index + 1}</span>
                        <span className="text-white">{item.userName}</span>
                      </div>
                      {/* <span className="text-purple-400 font-bold">{item.score}</span> */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Quiz;