import React, { useState } from "react";
import styled from "styled-components";
import { RadioGroup, RadioButton } from "react-radio-buttons";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { head_1, head_2 } from "../shared/textStyle";
import theme from "../shared/theme";
import Logo from "../components/Logo";
import Error from "../components/Error";

const Main = props => {
  const { history } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleGenderChange = index => {
    setGender(index ? "Male" : "Female");
    console.log(index ? "Male" : "Female");
  };

  const handleNameChange = e => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Layout>
      <Container>
        <Logo />
        <Title>직업가치관검사</Title>
        <Name>
          <SubTitle>이름</SubTitle>
          <NameInput placeholder="" onChange={handleNameChange} value={name} />
        </Name>
        <SubTitle>성별</SubTitle>
        <Gender>
          <RadioGroup horizontal>
            <RadioButton value="Male" rootColor="#C4C4C4" pointColor="#909090" onChange={handleGenderChange} checked={gender === "Female"}>
              여성
            </RadioButton>
            <RadioButton value="Female" rootColor="#C4C4C4" pointColor="#909090" onChange={handleGenderChange} checked={gender === "Male"}>
              남성
            </RadioButton>
          </RadioGroup>
        </Gender>
        <ButtonWrapper>
          <Error>{error}</Error>
          <Button
            _onClick={() => {
              if (!gender && !name) {
                setError("이름과 성별을 입력해주세요.");
              } else if (!gender) {
                setError("성별을 입력해주세요.");
              } else if (!name) {
                setError("이름을 입력해주세요.");
              } else {
                history.push("/sample");
              }
            }}
            text="검사시작"
          />
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

const Title = styled.h1`
  ${head_1}
  margin-top: 5rem;
  align-items: left;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  width: 10rem;
  ${head_2}
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
  font-size: 1.4rem;
  text-indent: 0.8rem;
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

// const Error = styled.div`
//   width: 50%;
//   height: 3.4rem;
//   margin-right: 2rem;
//   text-align: left;
//   justify-content: flex-end;
//   align-items: center;
//   display: flex;
// `;

export default Main;
