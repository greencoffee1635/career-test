import React from "react";
import styled from "styled-components";

import theme from "../shared/theme";

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
  width: 10rem;
  background-color: ${props => theme.colors.mainColor};
  color: ${props => theme.colors.white};
  padding: 12px 0px;
  box-sizing: border-box;
  border: 1px ${props => theme.colors.mainColor};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
`;

export default Button;
