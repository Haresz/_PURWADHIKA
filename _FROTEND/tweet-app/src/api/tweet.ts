import axios from "axios";

export function getAllTweets() {
  return axios.get("http://localhost:2000/tweets");
}

export function addtweet(data: {
  userId: string;
  tweetId: string;
  content: string;
}) {
  return axios.post("http://localhost:2000/tweets", data);
}
