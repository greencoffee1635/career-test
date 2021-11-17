import React from "react";

const Info = props => {
  return (
    <div>
      <div>
        <h2>검사 시작</h2>
      </div>
      <div>{/* <ProgressBar /> */}</div>
      <p>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. 가치의 뜻을 잘모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
      <div className="question">
        <p>두개 가치 중에 자신에게 더 중요한 가치를 선택하세요</p>
        <label>
          <input type="radio" value="Male" name="gender" />
          창의성
        </label>
        <label>
          <input type="radio" value="Male" name="gender" />
          안정성
        </label>
      </div>
    </div>
  );
};

export default Info;
