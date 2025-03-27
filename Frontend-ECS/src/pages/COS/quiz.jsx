import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import bgVid from './COS-BG.mp4';
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
  const audioRef = useRef(null);

  // Auth context and navigation
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // SWR for leaderboard
  const fetcher = () =>
    axios
      .get("/api/v1/quiz/leaderboard", {
        headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` },
      })
      .then((res) => res.data);
  const { data: leaderboard, mutate } = useSWR(isLoggedIn ? "scores" : null, fetcher, {
    refreshInterval: 5000,
  });

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  // Fetch questions when quiz starts
  useEffect(() => {
    if (isLoggedIn && isQuizStarted) {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get("/api/v1/quiz/questions", {
            headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` },
          });
          setQuestions(response.data);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
      fetchQuestions();
    }
  }, [isLoggedIn, isQuizStarted]);

  // Autoplay audio when question changes
  useEffect(() => {
    if (
      isQuizStarted &&
      questions.length > 0 &&
      questions[currentQuestion]?.questionType === "audio" &&
      audioRef.current
    ) {
      audioRef.current.load();
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
        setTimeout(() => audioRef.current.play(), 100);
      });
    }
  }, [isQuizStarted, currentQuestion, questions]);

  // Countdown timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const target = new Date().setHours(22, 0, 0, 0);
      const adjustedTarget = now > target ? target + 24 * 60 * 60 * 1000 : target;
      const diff = adjustedTarget - now;
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");
      setTimeRemaining(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  // Start quiz manually after team name entry
  const startQuiz = () => {
    if (teamName.trim()) {
      setIsQuizStarted(true);
    } else {
      alert("Please enter your team name to start the quiz.");
    }
  };

  // Submit answer
  const handleSubmit = async () => {
    if (!questions.length) return;

    const currentQ = questions[currentQuestion];
    const isCorrect = userAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase();
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
          "/api/v1/quiz/leaderboard",
          { userName: teamName, score: newScore },
          { headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` } }
        );
        mutate();
      } catch (error) {
        console.error("Error updating leaderboard:", error);
      }
    }
  };

  // Store result
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

      await axios.post("/api/v1/quiz/results", resultData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accesstoken")}` },
      });
    } catch (error) {
      console.error("Error storing result:", error);
    }
  };

  // Trigger result storage when quiz finishes
  useEffect(() => {
    if (quizFinished) storeResult();
  }, [quizFinished]);

  // Restart quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setUserAnswer("");
    setUserAnswers([]);
    setIsQuizStarted(false); // Reset to team name entry
    setTeamName(""); // Clear team name
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

  // Render: Team name entry screen after login
  if (!isQuizStarted) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-blue-900 z-50">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Enter Your Team Name
          </h2>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            placeholder="Team Name"
          />
          <button
            onClick={startQuiz}
            className="w-full mt-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg uppercase tracking-wide hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Render: Main quiz UI
  return (
    <div className="fixed w-screen min-h-screen bg-slate-900 text-white overflow-hidden z-50">
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
          <section className="w-[70%]">
            <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-8 h-[70vh] overflow-y-auto [scrollbar-width:none]">
              {!quizFinished ? (
                <div className="space-y-8">
                  <div className="flex justify-between text-lg font-bold text-blue-400 sticky top-0 bg-slate-800/70 backdrop-blur-xl z-10 py-2">
                    <span>Question {currentQuestion + 1} / {questions.length}</span>
                    <span>Score: {score}</span>
                  </div>
                  {questions.length > 0 && (
                    <div className="space-y-6">
                      <h2 className="text-3xl font-semibold text-white mb-8 leading-relaxed whitespace-pre-wrap">
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
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Type your answer here..."
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={!questions.length}
                      className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg uppercase tracking-wide hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    onClick={restartQuiz}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg uppercase tracking-wide hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Restart Quiz
                  </button>
                </div>
              )}
            </div>
          </section>

          <aside className="w-[30%]">
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
                      <span className="text-purple-400 font-bold">{item.score}</span>
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