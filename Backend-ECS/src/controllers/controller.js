import Question from "../models/qnsSchema.js";
import Result from "../models/resultSchema.js";
import { questions } from "../db/data.js";
import Redis from "ioredis";

// Redis connection
const redis = new Redis(process.env.REDIS_URL);

// GET Questions
export async function getQuestions(req, res) {
  try {
    const q = await Question.find();
    res.json(q);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// ADD Questions
export async function insertQuestion(req, res) {
  try {
    await Question.insertMany(questions);
    res.json({ msg: "Inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// DELETE Questions
export async function dropQuestion(req, res) {
  try {
    await Question.deleteMany();
    res.json({ msg: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// GET Results
export async function getResults(req, res) {
  try {
    // Fetch all results, including scholar_ID, with populated questionId references if needed
    const results = await Result.find().populate("answers.questionId", "questionText answer");
    res.json(results);
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// POST Result
export async function storeResult(req, res) {
  try {
    const { teamname, scholar_ID, answers, attempts, points } = req.body;

    // Validation
    if (!teamname || !answers) {
      return res.status(400).json({ error: "Username and answers are required" });
    }
    if (!Array.isArray(answers)) {
      return res.status(400).json({ error: "Answers must be an array" });
    }
    // Optional: Validate scholar_ID if needed

    // Store in database
    const result = await Result.create({
      username: teamname,
      scholar_ID, // Include scholar_ID from request body
      answers,
      attempts,
      points,
    });

    res.json({ msg: "Result stored successfully", result });
  } catch (error) {
    console.error("Error storing result:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// DELETE Results
export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// CREATE Leaderboard with composite score to break ties by submission time
export async function createLeaderBoard(req, res) {
  const { userName, score } = req.body;

  try {
    const now = Date.now(); // current timestamp in milliseconds
    // Compute composite score: higher integer score plus a fractional component based on submission time.
    // Subtract current timestamp from a large constant to give a higher fractional value to earlier submissions.
    const compositeScore = score + (1000000000000 - now) / 1000000000000;
    await redis.zadd("scores", compositeScore, userName);
    const rank = await redis.zrevrank("scores", userName);
    console.log(userName, compositeScore);
    res.status(200).json({ success: true, rank });
  } catch (error) {
    console.error("Error creating leaderboard entry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// GET Leaderboard
export async function getLeaderBoard(req, res) {
  try {
    const rawScores = await redis.zrevrange("scores", 0, 10, "WITHSCORES");
    const scores = [];

    for (let i = 0; i < rawScores.length; i += 2) {
      scores.push({
        userName: rawScores[i],
        score: parseFloat(rawScores[i + 1]), // composite score stored
      });
    }

    console.log(rawScores);
    res.status(200).json(scores);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// CLEAR Leaderboard
export async function clearLeaderboard(req, res) {
  try {
    await redis.flushdb();
    res.status(200).json({ msg: "Leaderboard cleared successfully" });
  } catch (error) {
    console.error("Error clearing leaderboard:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}