import React from "react";
import styled from "styled-components";

// components & elements
import { sub_3 } from "../shared/textStyle";

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
  ${sub_3};
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export default Description;
