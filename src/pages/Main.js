import React from "react";
import styled from "styled-components";

// components & elements
import Layout from "../components/Layout";
import Button from "../elements/Button";
import theme from "../shared/theme";

const Main = props => {
  const { history } = props;
  return (
    <Layout>
      <Container>
        <Logo>
          <eliceLogo>{eliceLogo}</eliceLogo>
        </Logo>
        <Title>직업가치관검사</Title>
        <Name>
          <SubTitle>이름</SubTitle>
          <NameInput placeholder="" />
        </Name>
        <SubTitle>성별</SubTitle>
        <Gender>
          <div>
            <GenderInput type="radio" value="Male" name="gender" />
            <label>MALE</label>
          </div>
          <div>
            <GenderInput type="radio" value="Female" name="gender" />
            <label>FEMALE</label>
          </div>
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

const eliceLogo = "/* elice */";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => theme.colors.main};
  text-align: center;
`;

const Title = styled.h1`
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
  height: 3.1rem;
  font-size: 1.8rem;
  /* 입력시 글자색 */
  color: ${props => theme.colors.deepgray};
  /* 배경색 */
  background-color: ${props => theme.colors.lightgray};
  /* 테두리색 */
  border: ${props => theme.colors.gray} 1px solid;
  border-radius: 6px;
  :focus {
    outline-color: ${props => theme.colors.deepgray};
  }
`;

const Gender = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 400;
  padding-bottom: 1.5rem;
`;

const GenderInput = styled.input``;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export default Main;
