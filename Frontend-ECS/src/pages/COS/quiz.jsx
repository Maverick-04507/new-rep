import { useState, useEffect } from "react";
import bgVid from './COS-BG.mp4';
import './quiz.css';
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
    axios.get("http://localhost:7000/api/v1/quiz/leaderboard").then(res => res.data);

  const { data, mutate } = useSWR("scores", fetcher);

  
  useEffect(() => {
    if (isQuizStarted) {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get("http://localhost:7000/api/v1/quiz/questions");
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
      await axios.post("http://localhost:7000/api/v1/quiz/results", resultData);
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
      await axios.post("http://localhost:7000/api/v1/quiz/leaderboard", leaderBoardData);
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
      <div className="flex flex-col fixed z-50 w-full min-h-screen items-center justify-center bg-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-white">Enter Your Username</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2 border-2 text-black border-gray-400 rounded mb-4"
          placeholder="Username"
        />
        <button
          onClick={startQuiz}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 fixed z-50 w-full min-h-screen">
      <video autoPlay loop muted className="absolute object-cover w-full h-full -z-30" src={bgVid} />
      <div className="userinfo flex justify-around p-10 items-center">
        <div className="username text-5xl font-semibold">{userName}</div>
        <div className="time-remaining text-3xl font-semibold">Time Remaining: {timeRemaining}</div>
      </div>
      <div className="module-border-wrap w-2/3 h-2/3 mobile:max-h-fit rounded-lg mx-auto">
        <div className="bg-indigo-500 shadow-lg p-6 rounded-lg h-full w-full text-center module">
          <div className="flex justify-between text-lg font-bold mb-4">
            {!quizFinished ? (
              <span>Question {currentQuestion + 1} / {questions.length}</span>
            ) : null}
          </div>
          {quizFinished ? (
            <div>
              <h2 className="text-2xl font-bold">Quiz Completed!</h2>
              <p className="text-lg my-4">Your Score: {score} / {questions.length}</p>
              <button onClick={restartQuiz} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Restart Quiz
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-full justify-around pb-10">
              {questions.length > 0 && (
                <h2 className="text-4xl text-white font-semibold mb-4">
                  {questions[currentQuestion].question}
                </h2>
              )}
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="p-2 border-2 text-black border-gray-400 rounded"
                placeholder="Type your answer here..."
              />
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
                disabled={questions.length === 0}
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>
      </div>
     
      <div className="border border-red-600 w-[50vw] h-[20vh] mx-auto mt-4">
        {data && <ul>
            {data.map(item => <li key={item.userName}>{item.userName} - {item.score}</li>)}
          </ul>}
      </div>
    </div>
  );
};

export default Quiz;
