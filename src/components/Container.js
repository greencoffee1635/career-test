import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return (
  <DefaultForm>
    {children}
    </DefaultForm>
    );
};

const DefaultForm = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export default Container;
