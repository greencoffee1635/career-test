import React from "react";
import styled from "styled-components";
import { RadioGroup, RadioButton } from "react-radio-buttons";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import theme from "../shared/theme";
import Logo from "../components/Logo";

const Main = props => {
  const { history } = props;
  return (
    <Layout>
      <Container>
        <Logo />
        <Title>직업가치관검사</Title>
        <Name>
          <SubTitle>이름</SubTitle>
          <NameInput placeholder="" />
        </Name>
        <SubTitle>성별</SubTitle>
        <Gender>
          <RadioGroup horizontal>
            <RadioButton value="Male" rootColor="#C4C4C4" pointColor="#909090">
              여성
            </RadioButton>
            <RadioButton value="Female" rootColor="#C4C4C4" pointColor="#909090">
              남성
            </RadioButton>
          </RadioGroup>
        </Gender>
        <ButtonWrapper>
          <Button
            _onClick={() => {
              history.push("/start");
            }}
            text="검사시작"
          />
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

const Title = styled.h1`
  margin-top: 5rem;
  align-items: left;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  width: 10rem;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Name = styled.div`
  width: 10rem;
  align-items: center;
  padding-bottom: 1.5rem;
`;

const NameInput = styled.input`
  width: 30rem;
  height: 3.4rem;
  font-size: 1.8rem;
  text-indent: 0.5rem;
  /* 입력시 글자색 */
  color: ${props => theme.colors.middlegray};
  /* 테두리색 */
  border: ${props => theme.colors.gray} 1px solid;
  :focus {
    outline-color: ${props => theme.colors.middlegray};
  }
`;

const Gender = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 400;
  padding-bottom: 1.5rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: right;
`;

export default Main;
