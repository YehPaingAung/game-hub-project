import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da868584ccfb4a0caf4f493aef97f0a8",
  },
});
