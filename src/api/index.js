import axios from "axios";

const urlScore =
  "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores";

const rendomUrl = "https://api.quotable.io/random";

export const rendomQuote = () => axios.get(rendomUrl);

export const sendScoreData = (scoreData) =>
  axios.post(urlScore, scoreData, {
    headers: { "Content-Type": "application/json" },
  });

export const getScores = () => axios.get(urlScore);
