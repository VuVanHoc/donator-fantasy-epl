import axios from "axios";

const instance = axios.create({
  baseURL: `https://be.fx-signal.club/fantasy-donator/api`,
});

export default instance;
