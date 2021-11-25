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

const Test = props => {
  const { history } = props;
  const [questions, setQuestions] = useState(null);
  const [endPage, setEndPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const questionPerPage = 5;

  const paginate = (arr, page, itemPerPage) => {
    const startIndex = page * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return arr.slice(startIndex, endIndex);
  };
  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetchData();
      setQuestions(data);
      setEndPage(Math.round(data.length / questionPerPage));
    };
    fetchQuestions();
  }, []);

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
            <Question key={x.index} title={x.title} answer1={x.answer1} answer2={x.answer2} index={x.index} />
          ))}
        <ButtonWrapper>
          {
            (currentPage > 0,
            currentPage < 6 && (
              <Button
                _onClick={() => {
                  setCurrentPage(currentPage - 1);
                  if (currentPage < 1) history.push("/sample");
                }}
                text="이전"
              ></Button>
            ))
          }
          {currentPage < endPage - 1 && (
            <Button
              _onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
              text="다음"
            ></Button>
          )}
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
