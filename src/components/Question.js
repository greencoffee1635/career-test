import React from "react";
import styled from "styled-components";

// components & elements
import { sub_1, sub_2 } from "../shared/textStyle";
import theme from "../shared/theme";

const Question = props => {
  const { questionData, currentScore, value, name } = props; // questionData 비교

  console.log(currentScore); //현재 저장한 점수
  console.log(questionData); //현재 저장한 점수
  console.log(typeof questionData.answer1Score); //현재 저장한 점수
  console.log(questionData.answer2Score); //현재 저장한 점수

  return (
    <div>
      <input defaultChecked={questionData.answer1Score === currentScore} type="radio" value={value} name={name} />
      <label key={props.key}>{props.title}</label>
      <DescWrapper>
        <Description key={props.title}>
          {props.title} : {props.description}
        </Description>
      </DescWrapper>
    </div>
  );
};

// const QuestionWrapper = styled.div`
//   height: 16rem;
//   /* border: 1px solid ${props => theme.colors.main}; */
//   border: 1px solid ${props => theme.colors.gray};
//   background-color: ${props => theme.colors.lightgray};
//   border-radius: 6px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 1rem 0 0 0;

// `;

// const QuestionForm = styled.p`
//   ${sub_1}
//   margin-bottom: 2rem;
//   text-align: center;
//   color: ${props => theme.colors.main};
// `;

// const AnswerForm = styled.div`
//   ${sub_2}
//   width: 90%;
//   display: flex;
//   justify-content: space-evenly;
//   padding-bottom: 2rem;
// `;

const DescWrapper = styled.article`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`;

const Description = styled.p`
  font-size: 0.8rem;
  display: flex;
  margin: 0;
  justify-content: flex-end;
  text-align: center;
`;

export default Question;
