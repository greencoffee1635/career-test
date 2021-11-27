import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../shared/theme";

const Container = styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: 35rem;
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => theme.colors.lightgray};
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

const ProgressPerc = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      {/* <span>{(value / max) * 100}%</span> */}
    </Container>
  );
};

ProgressPerc.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressPerc.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "35rem",
};

export default ProgressPerc;
