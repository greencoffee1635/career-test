import React from "react";
import styled from "styled-components";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { head_1, head_3 } from "../shared/textStyle";
import Logo from "../components/Logo";

const Result = props => {
  const { history } = props;
  return (
    <div>
      <Layout>
        <Container>
          <Logo />
          <Title>검사 완료</Title>
          <SubTitle>
            검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해
            생각해 볼 기회를 제공합니다.
          </SubTitle>
          <ButtonWrapper>
            <Button
              _onClick={() => {
                history.push("/detail");
              }}
              text="결과보기"
            />
          </ButtonWrapper>
        </Container>
      </Layout>
    </div>
  );
};
const Title = styled.h1`
  ${head_1}
  margin-top: 5rem;
  align-items: left;
  margin-bottom: 2rem;
`;
const SubTitle = styled.h2`
  ${head_3}
  width: 100%;
  font-weight: 500;
  margin-bottom: 2rem;
`;
const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: right;
`;
export default Result;
