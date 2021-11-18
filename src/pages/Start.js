import React from "react";
import styled from "styled-components";

// components & elements
import Info from "../components/Info";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import Logo from "../components/Logo";

const Start = props => {
  const { history } = props;

  return (
    <Layout>
      <Container>
        <Logo />
        <Info />
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;

export default Start;
