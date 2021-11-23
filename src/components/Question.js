import React from "react";
import styled from "styled-components";

// components & elements
import { sub_1, sub_2 } from "../shared/textStyle";
import theme from "../shared/theme";

const Question = props => {
  const { title, answer1, answer2, index } = props;

  return (
    <div>
      <QuestionWrapper>
        <QuestionExample key={title}>{title}</QuestionExample>
        <AnswerExample>
          <div>
            <input type="radio" name={index} />
            <label key={answer1}>{answer1}</label>
          </div>
          <div>
            <input type="radio" name={index} />
            <label key={answer2}>{answer2}</label>
          </div>
        </AnswerExample>
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

const QuestionExample = styled.p`
  ${sub_1}
  margin-bottom: 2rem;
  text-align: center;
`;

const AnswerExample = styled.div`
  ${sub_2}
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1.5rem;
`;

export default Question;
