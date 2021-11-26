import React, { useEffect, useState } from "react";
import styled from "styled-components";

import fetchData from "../api/fetch";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { head_1 } from "../shared/textStyle";
import Logo from "../components/Logo";
import ProgressBar from "../components/Progress";
import Question from "../components/Question";

/*
answerScore - > 28 개
    0 <- 체크 안했을 때.
    0 이 아닌 다른 수 < - 체크 했을 때
    answerScore 리스트에서
    0이 아닌 갯수 / 28
    28/28 = 1 -> 100%
    14/28 = 0.5 -> 50%

    { percent = answerScore.filter(x=>x!==0).length / 28 }
    체크한 것 중에 0이 아닌 갯수를 가져온다 그리고 28로 나눈다
    
*/

/*
  # 다음 버튼 활성화
  
    answerScore.slice((현재페이지-1)*5, (현재페이지*5)+5) 
    현재페이지 기준으로 5개씩 잘라온다.
    5개의 문항이 전부 0이 아닐 경우. filter(x=>x!==0).length === 0 -> 다음 버튼 활성화.
*/
const Test = props => {
  const { history } = props;
  const [questions, setQuestions] = useState(null);
  const [endPage, setEndPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(new Array(28).fill(0));
  const [loading, setLoading] = useState(false);

  const questionPerPage = 5;

  const paginate = (arr, page, itemPerPage) => {
    const startIndex = page * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return arr.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      const data = await fetchData();
      setQuestions(data);
      setEndPage(Math.round(data.length / questionPerPage));
      setLoading(false);
    };
    fetchQuestions();
  }, []);

  const handleQuestionClick = (index, score) => {
    const temp = [...answers];
    temp[index] = score;
    setAnswers(temp);
    console.log(index);
    console.log(answers);
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage < 1) history.push("/sample");
  };

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
  };

  if (loading)
    return (
      <Layout>
        <Container>
          <Logo />
          <Loading>잠시만 기다려 주세요.</Loading>
        </Container>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        <Logo />
        <div>
          <div>
            <Title>검사 진행</Title>
          </div>
          <ProgressBar color={"#7979F7"} width={"30rem"} value={0} max={100} />
        </div>
        {questions &&
          paginate(questions, currentPage, questionPerPage).map(x => (
            <Question key={x.index} onClick={handleQuestionClick} currentScore={answers[x.index]} questionData={x} />
          ))}
        <ButtonWrapper>
          {(currentPage > 0, currentPage < 6 && <Button _onClick={handlePrevButton} text="이전"></Button>)}
          {currentPage < endPage - 1 && <Button _onClick={handleNextButton} text="다음"></Button>}
          {currentPage === endPage - 1 && (
            <Button
              _onClick={() => {
                history.push("/result");
              }}
              text="제출"
            ></Button>
          )}
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

const Loading = styled.span`
  ${head_1}
  text-align: center;
`;

const Title = styled.h1`
  ${head_1}
  margin-top: 5rem;
  align-items: left;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export default Test;
