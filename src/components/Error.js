import React from "react";
import styled from "styled-components";

const Error = ({ children }) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};

const ErrorMsg = styled.div`
  width: 50%;
  height: 3.4rem;
  margin-right: 1.6rem;
  text-align: left;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

export default Error;
