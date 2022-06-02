# Career-test

## 1. 프로젝트 소개

- 사용자의 이름, 나이, 성별을 입력한 후, 직업 심리 검사를 진행하면 나와 성향이 맞는 직업을 추천해주고, 사용자의 직업 가치관과 가장 적합도가 높은 직업을 탐색할 수 있도록 도움을 주는 검사 결과를 보여주는 웹 서비스

## 2. 기술 스택

<div>
<img alt="Javascript" src ="https://img.shields.io/badge/Javascript-F7DF1E.svg?&style=for-the-badge&logo=Javascript&logoColor=black"/>
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/>
<img alt="styled-components" src ="https://img.shields.io/badge/styled--components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=black"/>
<img alt="Axios" src ="https://img.shields.io/badge/Axios-671DDF.svg?&style=for-the-badge&logo=Axios&logoColor=white"/>
<img alt="React-Router" src ="https://img.shields.io/badge/React-Router-CA4245.svg?&style=for-the-badge&logo=React-Router&logoColor=white"/>
<img alt="chart.js" src = "https://img.shields.io/badge/Chart-js-FF6384.svg?&style=for-the-badge&logo=Chart-js&logoColor=black"/>
<img alt="Yarn" src ="https://img.shields.io/badge/Yarn-2C8EBB.svg?&style=for-the-badge&logo=Yarn&logoColor=white"/>
<img alt="GitLab" src ="https://img.shields.io/badge/GitLab-FCA121.svg?&style=for-the-badge&logo=GitLab&logoColor=white"/>
</div>

## 3. 프로젝트 구성도

[와이어프레임](https://whimsical.com/ASEAcNYvT7fohMjomEU4jh)

## 4. 서비스 주요 기능 설명

### 검사 시작 시, 유저 설정

필수

- [x] 이름을 입력할 수 있는 input form을 구현합니다.
- [x] 성별을 선택할 수 있는 input form을 구현합니다.
- [x] 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 검사 시작 버튼이 비활성화 되어야 합니다.

선택

- [x] 이름을 올바르게 입력하지 않았을 경우, 이에 대한 안내 메시지를 출력합니다.
- [x] 성별을 선택하지 않았을 경우, 이에 대한 안내 메시지를 출력합니다.

## 검사 예시 페이지

필수

- [x] 검사를 시작하기 전 앞으로의 진행 방식에 관해서 설명하는 페이지를 구현합니다.
- [x] 진행 방식에 대한 검사 예제 문항이 한 문항을 화면에 표시합니다.
- [x] 검사 시작 버튼을 구현합니다.

선택

- [x] 검사 예제 문항을 진행하지 않으면 검사 시작 버튼이 비활성화 되어야 합니다.
- [x] 검사 예시 페이지부터는 진행 표시줄(Progress bar)가 포함되어있어야 하며, 검사 예시 페이지는 0%로 측정되어야 합니다. (진행 표시줄의 형태는 무관합니다.)

## 검사 진행 페이지

필수

- [x] 페이지 당 5개의 문항이 보여야 합니다.
- [x] 페이지 내 문항을 모두 진행하기 전까지는 "다음" 버튼이 비활성화 상태여야 합니다.

선택

- [ ] 각 문항을 선택할 때마다 진행 표시줄과 퍼센트(%)가 갱신되어야 합니다.
- [x] "이전" 버튼을 클릭했을 때, 이전 페이지 문항에서 선택한 값이 유지된 상태여야 합니다.

## 검사 완료 페이지

필수

- [x] 검사가 완료되었다는 문구를 포함해야 하며, 검사 결과에 대한 간단한 문장을 포함해야 합니다.
- [ ] Ex) 사용자는 XX 성향이므로 XX 직업에 적합합니다.

## 결과표 페이지

필수

- [ ] 유저의 기본 정보를 포함해야 합니다. (이름, 성별, 검사일)
- [ ] 직업 가치관 결과에 대하여 항목별로 수치를 표기해야 합니다. (ex. 막대그래프)
- [ ] 가치관과 관련이 높은 직업을 결과에 따라 분류하여 표기해야 합니다.
- [ ] "다시 검사하기" 버튼 클릭 시, 진행했던 항목에 대한 기록은 모두 초기화되어야 합니다. - 검사 시작 시, 유저 설정
