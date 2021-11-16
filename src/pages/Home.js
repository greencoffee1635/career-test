import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>직업가치관검사</Title>
      <InputWrap>
        <Name>이름</Name>
        <input placeholder="name" />
        <Gender>성별</Gender>
        <label>
          <input type="radio" value="Male" name="gender" />
          MALE
        </label>
        <label>
          <input type="radio" value="Female" name="gender" />
          FEMALE
        </label>
      </InputWrap>
    </Container>
  );
};
const Container = styled.div``;
const Title = styled.div``;
const Name = styled.div``;
const InputWrap = styled.div``;
const Gender = styled.div``;

export default Home;
