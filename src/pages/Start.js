import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import Logo from "../components/Logo";
import theme from "../shared/theme";
import ProgressBar from "../components/Progress";

const Start = props => {
  const { history } = props;
  const [question, setQuestion] = useState([]);
  const [answer01, setAnswer01] = useState([]);
  const [answer02, setAnswer02] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=f5d2ce0778024de3fb1b12669f7fffbe&q=6`);
        setQuestion(response.data.RESULT[1].question);
        setAnswer01(response.data.RESULT[1].answer01);
        setAnswer02(response.data.RESULT[1].answer02);
      } catch (e) {
        setError(e);
      }
    };
    fetch();
  }, []);

  return (
    <Layout>
      <Container>
        <Logo />
        <div>
          <div>
            <Title>검사 예시</Title>
          </div>
          <div>
            <ProgressBar color={"#7979F7"} width={"30rem"} value={0} max={100} />
          </div>
          <SubTitle>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</SubTitle>
        </div>
        <Question>
          <QuestionExample key={question}>{question}</QuestionExample>
          <AnswerExample>
            <div>
              <input type="radio" name="character" disabled="true" />
              <label key={answer01}>{answer01}</label>
            </div>
            <div>
              <input type="radio" name="character" disabled="true" />
              <label key={answer02}>{answer02}</label>
            </div>
          </AnswerExample>
        </Question>
        <ButtonWrapper>
          <Button
            _onClick={() => {
              history.push("/test");
            }}
            text="검사시작"
          ></Button>
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};
const Title = styled.h2`
  margin-top: 5rem;
  font-size: 2rem;
  align-items: left;
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;

const Question = styled.p`
  height: 13rem;
  border: 1px solid ${props => theme.colors.gray};
  background-color: ${props => theme.colors.lightgray};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const QuestionExample = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const AnswerExample = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.1rem;
  font-weight: 400;
  padding-bottom: 1.5rem;
`;

export default Start;
