import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import fetchData from "../api/fetch";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { logo, head_1, sub_1, sub_2 } from "../shared/textStyle";
import Logo from "../components/Logo";
import ProgressBar from "../components/Progress";
import Question from "../components/Question";
import Error from "../components/Error";
import theme from "../shared/theme";
import Description from "../components/Description";

const Test = props => {
  const { history } = props;
  const [questions, setQuestions] = useState(null);
  const [endPage, setEndPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(new Array(28).fill(0));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  const questionPerPage = 5;

  const paginate = (arr, page, itemPerPage) => {
    const startIndex = page * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return arr.slice(startIndex, endIndex);
  };

  // const [answerList, setAnswerList] = useState(() => JSON.parse(window.localStorage.getItem("answerlist")));

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

  const handleCheck = (e, index, score) => {
    // const temp = [...answers];
    // temp[index] = score;
    setAnswers([...answers, e.target.value]);
    // console.log(index);
    // console.log(answers);
    if (typeof window !== "undefined") {
      localStorage.setItem(e.target.name, e.target.value);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage < 1) history.push("/sample");
    setError("");
  };

  const filterQuestion = answers.slice(currentPage * 5, currentPage * 5 + 5).filter(e => e === 0).length;
  const handleNextButton = e => {
    // e.preventDefault();
    // if (filterQuestion !== 0) {
    // setError("빈칸을 채워주세요.");
    // } else {
    setCurrentPage(currentPage + 1);
    // setError("");
    // }
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
          <ProgressBar color={"#7979F7"} width={"35rem"} value={30} max={100} />
        </div>
        {questions &&
          paginate(questions, currentPage, questionPerPage).map(x => (
            <QuestionWrapper>
              <QuestionForm key={x.title}>{x.title}</QuestionForm>
              <AnswerForm>
                <AnswerBox key={x.qitemNo} onChange={handleCheck}>
                  <Question
                    name={`B${x.qitemNo}`}
                    value={x.answer1Score}
                    currentScore={answers[x.index]}
                    questionData={x}
                    title={x.answer1}
                  />
                  <Question
                    name={`B${x.qitemNo}`}
                    value={x.answer2Score}
                    currentScore={answers[x.index]}
                    questionData={x}
                    title={x.answer2}
                  />
                </AnswerBox>
              </AnswerForm>
              <DescForm>
                <Description title={x.answer1} description={x.answer1Description} />
                <Description title={x.answer2} description={x.answer2Description} />
              </DescForm>
            </QuestionWrapper>
          ))}

        <ButtonWrapper>
          {(currentPage > 0, currentPage < 6 && <Button _onClick={handlePrevButton} text="이전"></Button>)}
          <Error>{error}</Error>
          {currentPage < endPage - 1 && <Button _onClick={handleNextButton} text="다음"></Button>}
          {currentPage === endPage - 1 && (
            <Button
              _onClick={e => {
                // e.preventDefault();
                // if (filterQuestion !== 0) {
                //   setError("빈칸을 채워주세요.");
                // } else {
                history.push("/result");
                //   setError("");
                // }
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
  ${logo}
  text-align: center;
  margin: 5rem 0 2rem 0;
  color: ${props => theme.colors.main};
`;

const Title = styled.h1`
  ${head_1}
  margin: 5rem 0 2rem 0;
  color: ${props => theme.colors.main};
`;

const ButtonWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const QuestionWrapper = styled.div`
  height: 16rem;
  border: 1px solid ${props => theme.colors.gray};
  background-color: ${props => theme.colors.lightgray};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0 0 0;
`;

const QuestionForm = styled.p`
  ${sub_1}
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => theme.colors.main};
`;

const AnswerForm = styled.div`
  ${sub_2}
  display: flex;
  justify-content: right;
  padding-bottom: 2rem;
`;

const AnswerBox = styled.div`
  width: 90%;
  display: flex;
`;

const DescForm = styled.div`
  cursor: pointer;
  opacity: 0;
  :hover {
    opacity: 1;
    transition: 2.5s ease-in;
  }
`;

export default Test;
