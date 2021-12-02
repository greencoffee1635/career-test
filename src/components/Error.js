import React from "react";
import styled from "styled-components";

// components & elements
import { sub_4 } from "../shared/textStyle";

const Error = ({ children }) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};

const ErrorMsg = styled.div`
  ${sub_4}
  width: 50%;
  height: 3.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.6rem;
`;

export default Error;
