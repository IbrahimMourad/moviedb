import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.themoviedb.org/4/list/1?page=1&api_key=85888d813e23d816e386a1d58a0238c5",
});
