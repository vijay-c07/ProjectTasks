import axios from "axios";

const API_URL = "http://localhost:8080/feedback";

export const getFeedbacks = () => {
  return axios.get(API_URL);
};