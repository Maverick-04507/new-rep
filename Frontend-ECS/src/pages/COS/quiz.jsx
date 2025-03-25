import { useState, useEffect } from "react";
import bgVid from './COS-BG.mp4';
import axios from "axios";
import useSWR from "swr";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [userName, setUserName] = useState("");
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const fetcher = () =>
    axios.get("https://new-rep-uw0m.onrender.com/api/v1/quiz/leaderboard").then(res => res.data);

  const { data, mutate } = useSWR("scores", fetcher);

  
  useEffect(() => {
    if (isQuizStarted) {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get("https://new-rep-uw0m.onrender.com/api/v1/quiz/questions");
          setQuestions(response.data);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
      fetchQuestions();
    }
  }, [isQuizStarted]);

  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(22, 0, 0, 0);
      if (now >= target) {
        target.setDate(target.getDate() + 1);
      }
      const difference = target - now;
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
      setTimeRemaining(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  
  const storeResult = async () => {
    try {
      const resultData = {
        username: userName,
        answers: userAnswers,
        attempts: 1,
        points: score,
        completedAt: new Date().toISOString(),
      };
      await axios.post("https://new-rep-uw0m.onrender.com/api/v1/quiz/results", resultData);
    } catch (error) {
      console.error("Error storing result:", error);
    }
  };

 
  const handleSubmit = async () => {
    if (questions.length === 0) return;
  
    const currentQ = questions[currentQuestion];
    const isCorrect = userAnswer.trim().toLowerCase() === currentQ.answer.toLowerCase();
  
    const answerData = {
      questionId: currentQ._id,
      userAnswer: userAnswer.trim().toLowerCase(),
      isCorrect: isCorrect,
    };
    setUserAnswers(prev => [...prev, answerData]);
  
    
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) {
      setScore(newScore);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setQuizFinished(true);
      }
    }
  
    setUserAnswer("");
  
    // Update leaderboard 
    const leaderBoardData = {
      userName: userName,
      score: newScore,
    };
    try {
      await axios.post("https://new-rep-uw0m.onrender.com/api/v1/quiz/leaderboard", leaderBoardData);
      mutate(); 
    } catch (error) {
      console.error("Error updating leaderboard:", error);
    }
  
   
  };
  

  
  useEffect(() => {
    if (quizFinished) {
      storeResult();
    }
  }, [quizFinished]);

  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setUserAnswer("");
    setUserAnswers([]);
  };

  
  const startQuiz = () => {
    if (userName.trim() !== "") {
      setIsQuizStarted(true);
    } else {
      alert("Please enter your username to start the quiz.");
    }
  };

  
  if (!isQuizStarted) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-blue-900 z-50">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-slate-800/80 backdrop-blur-lg border border-slate-700 shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Enter Your Username
          </h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            placeholder="Username"
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

  return (
    <div className="fixed w-[100vw] z-50 min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="absolute object-cover w-full h-full opacity-30">
          <source src={bgVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-blue-900/10 backdrop-blur-sm"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            {userName}
          </h1>
          <div className="text-2xl font-semibold text-blue-400">
            Time Remaining: <span className="text-purple-400">{timeRemaining}</span>
          </div>
        </div>

        {/* Quiz container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-8">
            {!quizFinished ? (
              <div className="space-y-8">
                <div className="flex justify-between text-lg font-bold text-blue-400">
                  <span>Question {currentQuestion + 1} / {questions.length}</span>
                  <span>Score: {score}</span>
                </div>
                
                {questions.length > 0 && (
                  <h2 className="text-3xl font-semibold text-white mb-8 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h2>
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
                    disabled={questions.length === 0}
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
        </div>

        {/* Leaderboard */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Leaderboard
            </h3>
            {data && (
              <div className="space-y-3">
                {data.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Quiz;
