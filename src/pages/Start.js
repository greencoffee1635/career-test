import React from "react";

import Info from "../components/Info";

import Button from "../elements/Button";

const Start = props => {
  const { history } = props;

  return (
    <div>
      <Info />
      <Button
        _onClick={() => {
          history.push("/test");
        }}
        text="검사시작"
      ></Button>
    </div>
  );
};

export default Start;
