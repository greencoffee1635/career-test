import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components & elements
import { sub_1, sub_2 } from "../shared/textStyle";
import theme from "../shared/theme";

const Question = props => {
  const [question, setQuestion] = useState([]);
  const [answer01, setAnswer01] = useState([]);
  const [answer02, setAnswer02] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const apiHost = process.env.REACT_APP_API_HOST
        const apiKey = process.env.REACT_APP_API_KEY

        const response = await axios.get(`${apiHost}/inspct/openapi/test/questions?apikey=${apiKey}&q=6`);
        setQuestion(response.data.RESULT[2].question);
        setAnswer01(response.data.RESULT[2].answer01);
        setAnswer02(response.data.RESULT[2].answer02);
      } catch (e) {
        setError(e);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <QuestionWrapper>
        <QuestionExample key={question}>{question}</QuestionExample>
        <AnswerExample>
          <div>
            <input type="radio" name="character" />
            <label key={answer01}>{answer01}</label>
          </div>
          <div>
            <input type="radio" name="character" />
            <label key={answer02}>{answer02}</label>
          </div>
        </AnswerExample>
      </QuestionWrapper>
    </div>
  );
};

const QuestionWrapper = styled.div`
  height: 13rem;
  border: 1px solid ${props => theme.colors.gray};
  background-color: ${props => theme.colors.lightgray};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0 0 0;
`;

const QuestionExample = styled.p`
  ${sub_1}
  margin-bottom: 2rem;
  text-align: center;
`;

const AnswerExample = styled.div`
  ${sub_2}
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1.5rem;
`;

export default Question;
