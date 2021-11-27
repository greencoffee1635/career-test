import React from "react";
import styled from "styled-components";

// components & elements
import theme from "../shared/theme";
import { logo } from "../shared/textStyle";

const Logo = () => {
  return (
    <LogoWrap>
      {EliceLogo}
    </LogoWrap>
  );
};

const EliceLogo = "/* elice */";

const LogoWrap = styled.header`
  ${logo}
  color: ${props => theme.colors.main};
  text-align: center;
`;

export default Logo;
