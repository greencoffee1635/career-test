import React from "react";
import styled from "styled-components";

import theme from "../shared/theme";

const Info = props => {
  return (
    <div>
      <div>
        <Title>검사 예시</Title>
      </div>
      <div>{/* <ProgressBar /> */}</div>
      <SubTitle>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</SubTitle>
      <Question>
        <QuestionExample>두개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</QuestionExample>
        <AnswerExample>
          <div>
            <input type="radio" name="character" disabled="true" />
            <label>창의성</label>
          </div>
          <div>
            <input type="radio" name="character" disabled="true" />
            <label>안정성</label>
          </div>
        </AnswerExample>
      </Question>
    </div>
  );
};

const Title = styled.h2`
  margin-top: 5rem;
  font-size: 2rem;
  align-items: left;
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Question = styled.p`
  height: 13rem;
  border: 1px solid ${props => theme.colors.gray};
  background-color: ${props => theme.colors.lightgray};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const QuestionExample = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align:center;
`;

const AnswerExample = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.1rem;
  font-weight: 400;
  padding-bottom: 1.5rem;
`;

export default Info;
