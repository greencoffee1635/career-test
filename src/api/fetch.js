import axios from "axios";

const fetchData = async () => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const apiKey = process.env.REACT_APP_API_KEY;

  const response = await axios.get(`${apiHost}/inspct/openapi/test/questions?apikey=${apiKey}&q=6`);

  const questions = response.data.RESULT.map((x, index) => {
    let result = {};
    result["index"] = index;
    result["title"] = x.question;
    for (let i = 1; i <= 2; i++) {
      if (x[`answer0${i}`]) {
        result[`answer${i}`] = x[`answer0${i}`];
        result[`answer${i}Description`] = x[`answer0${i + 2}`];
        result[`answer${i}Score`] = x[`answer0${i}`];
      } else {
        break;
      }
    }
    return result;
  });

  return questions;
};

export default fetchData;
