import axios from "axios";

const fetchData = async (TypeNumber = 6) => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiKey = process.env.REACT_APP_API_KEY;

  const response = await axios.get(`${apiHost}/inspct/openapi/test/questions?apikey=${apiKey}&q=${TypeNumber}`);
  //   console.log(response.data.RESULT[0].question);
  const questions = response.data.RESULT;

  return questions;
};

export default fetchData;
