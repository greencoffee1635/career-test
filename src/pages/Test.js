import React from "react";
import styled from "styled-components";

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
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <ButtonWrapper>
          <Button
            _onClick={() => {
              history.push("/result");
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 3rem;
`;

export default Test;
