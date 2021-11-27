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
import Error from "../components/Error";

const Test = props => {
  const { history } = props;
  const [questions, setQuestions] = useState(null);
  const [endPage, setEndPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(new Array(28).fill(0));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    // console.log(index);
    // console.log(answers);
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage < 1) history.push("/sample");
  };

  const handleNextButton = e => {
    e.preventDefault();
    if (answers.slice(currentPage * 5, currentPage * 5 + 5).filter(e => e === 0).length !== 0) {
      setError("빈칸을 채워주세요.");
    } else {
      setCurrentPage(currentPage + 1);
    }
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
          <Error>{error}</Error>
          {currentPage < endPage - 1 && <Button _onClick={handleNextButton} text="다음"></Button>}
          {currentPage === endPage - 1 && (
            <Button
              _onClick={e => {
                e.preventDefault();
                if (answers.slice(currentPage * 5, currentPage * 5 + 5).filter(e => e === 0).length !== 0) {
                  setError("빈칸을 채워주세요.");
                } else {
                  history.push("/result");
                }
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
  margin: 5rem 0 2rem 0;
`;

const ButtonWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export default Test;
