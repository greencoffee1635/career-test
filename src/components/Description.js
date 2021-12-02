import React from "react";
import styled from "styled-components";

// components & elements
import { sub_1, sub_2 } from "../shared/textStyle";
import theme from "../shared/theme";

const Description = props => {
  return (
    <div>
      <DescWrapper>
        <Desc key={props.title}>
          {props.title} : {props.description}
        </Desc>
      </DescWrapper>
    </div>
  );
};

const DescWrapper = styled.article`
  height: 1.2rem;
  display: flex;
  justify-content: center;
`;

const Desc = styled.div`
  font-size: 0.8rem;
  display: flex;
  margin: 0;
  justify-content: flex-end;
`;

export default Description;
