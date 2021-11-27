import React from "react";
import styled from "styled-components";

// components & elements
import Layout from "../components/Layout";
import Container from "../components/Container";
import Button from "../elements/Button";
import { head_1, head_3 } from "../shared/textStyle";
import Logo from "../components/Logo";
import theme from "../shared/theme";

const Result = props => {
  const { history } = props;

  return (
    <Layout>
      <Container>
        <Logo />
        <Title>직업가치관검사 결과표</Title>
        <SubTitle>
          검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, 중요 가치를 충족시켜줄 수 있는 직업에 대해
          생각해 볼 기회를 제공합니다.
        </SubTitle>
        <ButtonWrapper>
          <Button
            _onClick={() => {
              history.push("/");
            }}
            text="다시검사하기"
          />
        </ButtonWrapper>
      </Container>
    </Layout>
  );
};

const Title = styled.h1`
  ${head_1}
  color: ${props => theme.colors.main};
  margin: 5rem 0 2rem 0;
`;

const SubTitle = styled.h2`
  ${head_3}
`;

const ButtonWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 2rem;
`;

export default Result;
