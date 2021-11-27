import React, { useState, useEffect } from "react";
import styled from "styled-components";

import fetchData from "../api/fetch";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { head_1, head_3, sub_1, sub_2 } from "../shared/textStyle";
import Logo from "../components/Logo";
import theme from "../shared/theme";
import ProgressBar from "../components/Progress";
import Error from "../components/Error";

const Sample = props => {
  const { history } = props;
  const [question, setQuestion] = useState([]);
  const [answer01, setAnswer01] = useState([]);
  const [answer02, setAnswer02] = useState([]);
  const [error, setError] = useState("");

  let valid = false;

  useEffect(() => {
    const fetch = async () => {
      try {
        const question = (await fetchData())[0];
        setQuestion(question.title);
        setAnswer01(question.answer1);
        setAnswer02(question.answer2);
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
        <TitleWrapper>
          <Title>검사 예시</Title>
          <ProgressBar color={"#7979F7"} width={"30rem"} value={0} max={100} />
          <SubTitle>
            직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘모르겠다면 문항 아래에 있는 가치의 설명을
            확인해보세요.
          </SubTitle>
        </TitleWrapper>
        <QuestionWrapper>
          <QuestionSample key={question}>{question}</QuestionSample>
          <AnswerSample>
            <div>
              <input
                type="radio"
                name="character"
                value="0"
                onClick={() => {
                  valid = true;
                }}
              />
              <label key={answer01}>{answer01}</label>
            </div>
            <div>
              <input
                type="radio"
                name="character"
                value="1"
                onClick={() => {
                  valid = true;
                }}
              />
              <label key={answer02}>{answer02}</label>
            </div>
          </AnswerSample>
        </QuestionWrapper>
        <ButtonWrapper>
          <Error>{error}</Error>
          <Button
            _onClick={() => {
              if (valid) history.push("/test");
              else setError(`예시 항목을 선택해주세요.`);
            }}
            text="검사시작"
          ></Button>
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

const TitleWrapper = styled.article`
  margin: 5rem 0 2rem 0;
`;

const Title = styled.h1`
  ${head_1}
  margin-top: 0;
  color: ${props => theme.colors.main};
`;

const SubTitle = styled.h2`
  ${head_3}
`;

const QuestionWrapper = styled.article`
  height: 13rem;
  border: 1px solid ${props => theme.colors.gray};
  background-color: ${props => theme.colors.lightgray};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const QuestionSample = styled.p`
  ${sub_1}
  text-align: center;
  color: ${props => theme.colors.main};
  margin-bottom: 2rem;
`;

const AnswerSample = styled.div`
  ${sub_2}
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
`;

const ButtonWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;

export default Sample;
