import React from "react";
import styled from "styled-components";

const Question = props => {
  const { questionData, currentScore, value, name } = props; // questionData 비교

  // console.log(currentScore); //현재 저장한 점수
  // console.log(questionData); //현재 저장한 점수
  // console.log(typeof questionData.answer1Score); //현재 저장한 점수
  // console.log(questionData.answer2Score); //현재 저장한 점수

  return (
    <AnswerWrapper>
      <AnswerInput defaultChecked={questionData.answer1Score === currentScore} type="radio" value={value} name={name} />
      <label key={props.key}>{props.title}</label>
    </AnswerWrapper>
  );
};

const AnswerWrapper = styled.div`
  width: 13rem;
  display: flex;
  justify-content: center;
  text-indent: 0.1rem;
`;

const AnswerInput = styled.input`
  display: flex;
  align-items: center;
  margin: 5px 3px 3px 3px;
`;

export default Question;
