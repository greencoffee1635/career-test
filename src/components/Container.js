import React from "react"
import styled from "styled-components";

const Container = ({children}) => {
  return (
    <DefaultForm>
      {children}
    </DefaultForm>
  )
}

const DefaultForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default Container
