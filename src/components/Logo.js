import React from "react";
import styled from "styled-components";

// components & elements
import theme from "../shared/theme";

const Logo = () => {
  return (
    <LogoWrap>
      <eliceLogo>{eliceLogo}</eliceLogo>
    </LogoWrap>
  );
};

const eliceLogo = "/* elice */";

const LogoWrap = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => theme.colors.main};
  text-align: center;
`;

export default Logo;
