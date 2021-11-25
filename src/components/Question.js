import React from "react";
import styled from "styled-components";

// components & elements
import { sub_1, sub_2 } from "../shared/textStyle";
import theme from "../shared/theme";

const Question = props => {
  const { questionData, currentScore, onClick } = props; // questionData 비교
  console.log(currentScore); //현재 저장한 점수
  return (
    <div>
      <QuestionWrapper>
        <QuestionForm key={questionData.title}>{questionData.title}</QuestionForm>
        <AnswerForm>
          <div>
            <input
              defaultChecked={questionData.answer1Score === currentScore}
              onClick={() => onClick(questionData.index, questionData.answer1Score)}
              type="radio"
              name={questionData.index}
            />
            <label key={questionData.answer1}>{questionData.answer1}</label>
          </div>
          <div>
            <input
              defaultChecked={questionData.answer2Score === currentScore}
              onClick={() => onClick(questionData.index, questionData.answer2Score)}
              type="radio"
              name={questionData.index}
            />
            <label key={questionData.answer2}>{questionData.answer2}</label>
          </div>
        </AnswerForm>
      </QuestionWrapper>
    </div>
  );
};

const QuestionWrapper = styled.div`
  height: 13rem;
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
`;

const AnswerForm = styled.div`
  ${sub_2}
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1.5rem;
`;

export default Question;
