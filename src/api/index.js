import axios from "axios";

export const rendomQuote = () => axios.get("https://api.quotable.io/random");
