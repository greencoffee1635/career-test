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
import { useLocation } from "react-router-dom";

const Main = props => {
  const { history } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  // const [answerList, setAnswerList] = useState(() => JSON.parse(window.localStorage.getItem("answerlist")));

  const [userInfo, setUserInfo] = useState(() => JSON.parse(window.localStorage.getItem("userInfo")));
  // {
  //   userName: "",
  //   userGender: "",
  // });

  const handleGenderChange = (e, index) => {
    setGender(index ? "100323" : "100324");
    console.log(index ? "Male" : "Female");
    setUserInfo([...userInfo, e.target.value]);
    localStorage.setItem(e.target.name, e.target.value);
  };

  const handleNameChange = e => {
    setName(e.target.value);
    // console.log(e.target.value);
    setUserInfo([...userInfo, e.target.value]);
    localStorage.setItem(e.target.name, e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (userInfo.userGender === "" || userInfo.userName === "") {
      alert("이름과 성별을 정확히 입력해주세요.");
    } else {
      history.push("/sample");
    }
  }

  return (
    <Layout>
      <Container>
        <Logo />
        <Title>직업가치관검사</Title>
        <SubTitle>이름</SubTitle>
        <NameWrapper>
          <NameInput placeholder="" onChange={handleNameChange} name="userName" value={name} />
        </NameWrapper>
        <SubTitle>성별</SubTitle>
        <GenderWrapper>
          <RadioGroup horizontal>
            <RadioButton
              name="userGender"
              value={100324}
              rootColor="#C4C4C4"
              pointColor="#909090"
              onChange={handleGenderChange}
              checked={gender === "100324"}
            >
              여성
            </RadioButton>
            <RadioButton
              name="userGender"
              value={100323}
              rootColor="#C4C4C4"
              pointColor="#909090"
              onChange={handleGenderChange}
              checked={gender === "100323"}
            >
              남성
            </RadioButton>
          </RadioGroup>
        </GenderWrapper>
        <ButtonWrapper>
          <Error>{error}</Error>
          <Button
            _onClick={handleSubmit}
            // if (!gender && !name) {
            //   setError("이름과 성별을 입력해주세요.");
            // } else if (!gender) {
            //   setError("성별을 입력해주세요.");
            // } else if (!name) {
            //   setError("이름을 입력해주세요.");
            // } else {
            //   history.push("/sample");
            // }
            // }}
            text="검사시작"
          />
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

const Title = styled.h1`
  ${head_1}
  margin: 5rem 0 1rem 0;
  color: ${props => theme.colors.main};
`;

const SubTitle = styled.h2`
  ${head_2}
  width: 10rem;
  margin-bottom: 1rem;
`;

const NameWrapper = styled.article`
  width: 10rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const NameInput = styled.input`
  width: 35rem;
  height: 3.4rem;
  font-size: 1.4rem;
  text-indent: 0.8rem;
  color: ${props => theme.colors.middlegray}; // 입력시 글자색
  border: 1px solid ${props => theme.colors.gray}; // 테두리색
  :focus {
    outline-color: ${props => theme.colors.middlegray};
  }
`;

const GenderWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 400;
`;

const ButtonWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;

export default Main;
