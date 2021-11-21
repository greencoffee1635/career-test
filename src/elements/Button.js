import React from "react";
import styled from "styled-components";

import theme from "../shared/theme";

import { button } from "../shared/textStyle";

const Button = props => {
  const { text, _onClick } = props;

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
};

const ElButton = styled.button`
  width: 8rem;
  height: 3.4rem;
  background-color: ${props => theme.colors.main};
  color: ${props => theme.colors.white};
  padding: 12px 0px;
  box-sizing: border-box;
  border: 1px ${props => theme.colors.main};
  ${button}
  text-align: center;
  vertical-align: middle;
  border-radius: 8px;
  cursor: pointer;
`;

export default Button;
