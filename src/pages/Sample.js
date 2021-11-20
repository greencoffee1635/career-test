import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { head_1, head_3, sub_1, sub_2 } from "../elements/Text";
import Logo from "../components/Logo";
import theme from "../shared/theme";
import ProgressBar from "../components/Progress";

const Sample = props => {
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
        <QuestionWrapper>
          <QuestionExample key={question}>{question}</QuestionExample>
          <AnswerExample>
            <div>
              <input type="radio" name="character" disabled={true} />
              <label key={answer01}>{answer01}</label>
            </div>
            <div>
              <input type="radio" name="character" disabled={true} />
              <label key={answer02}>{answer02}</label>
            </div>
          </AnswerExample>
        </QuestionWrapper>
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

const Title = styled.h1`
  ${head_1}
  margin-top: 5rem;
  align-items: left;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  ${head_3}
  width: 100%;
  font-weight: 500;
  margin-bottom: 2rem;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;

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

export default Sample;
