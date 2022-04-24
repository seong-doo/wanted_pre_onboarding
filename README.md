# Wanted Pre Onboarding 기술과제
원티드 온보딩 코스에 참여하기 위해 사전 기술과제로 Toggle, Tab, Slider, input, Dropdown을 각각 리액트와 자바스크립트, scss를 이용하여 구현하였습니다.

## Toggle

![git  github Flow (4)](https://user-images.githubusercontent.com/85680496/164960863-036e5f04-ee54-4e08-98b9-e938a712541d.gif)

- 기존에는 Toggle 버튼을 만들때에는 radio 버튼을 활용하여 만들었지만 이번에는 Toggle 안쪽에 글씨가 있는 디자인이라서 기존의 방법말고 버튼을 두개 생성하고 버튼을 누를때마다 Toggle 모양으로 움직이는 새로운 div를 작성하여 만들어 보았습니다.
처음에는 dom을 이용하여 만들었지만 페이지를 처음 렌더링 할 경우에 HTML보다 Script가 먼저 실행되어 그런지 작동하지 않고 style을 찾을 수 없다는 오류가 발생하여 이 부분을 useRef로 바꾸어 작성하였고 이후에는 이상 없이 작동되었습니다.

## Tab

![git  github Flow (3)](https://user-images.githubusercontent.com/85680496/164961589-e52179ad-f601-4c7e-a341-5948a2d62ff5.gif)

- Tab의 경우에는 useState를 이용하여 누를때마다 탭의 위치를 숫자로 표현하였고 그것을 이용해 아래의 내용도 같이 바뀌도록 만들었습니다. Li 태그를 이용하였고 아래의 슬라이드 애니메이션을 주기 위해 Toggle에서 한 것처럼 div태그를 이용하여 만든 것을 추가하고 tab을 클릭 할때마다 비율에 맞게 left 속성이 바뀌도록 만들었습니다. 이또한 useRef를 이용하였습니다.

## Slider

![git  github Flow (1)](https://user-images.githubusercontent.com/85680496/164964738-266a5b43-b6e4-4380-b243-185523d74a58.gif)

- Slider의 경우는 부가 요소를 진행하지 못하였고 핵심요소만 구현을 하였습니다. input 태그의 range타입을 사용하였고 scss를 사용하여 디자인만 조금 바꾸어 주었습니다. 상단의 값이 자동으로 변하는 부분은 useState를 이용했고 이를 input태그의 onChange를 이용해 슬라이더에 변화가 있을때마다 value값이 변하도록 하였습니다.
이것을 작성하면서 가장 어려웠던 부분은 사실 디자인에 관한 것이었습니다. 그냥 움직이게만 하는 것은 어렵지 않았지만 슬라이더가 움직이면서 색이 채워지는 부분이나 예시처럼 중간중간 원하는 값에 포인트를 주는 방법같은 부분은 어려워서 하지 못하였습니다..

## Input

![git  github Flow (2)](https://user-images.githubusercontent.com/85680496/164964486-af7990f2-e1b6-4df3-a069-83709762b42e.gif)

- Input같은 경우에는 이메일 형식을 구분하기 위해 정규식을 이용했습니다. 그리고 이메일형식이 다르면 Input 창의 테두리가 붉은 색으로 나타나게 하였습니다. 다음으로 패스워드의 경우 간단하게 type을 버튼을 누를때마다 ‘password’에서 text’로만 바꿔주면 예시와 같은 기능을 구현 할수 있어서 그리 어렵지 않았습니다.

## Dropdown

![git  github Flow](https://user-images.githubusercontent.com/85680496/164964740-ccd7a888-d597-40d4-82e5-83d7953222f2.gif)

- 마지막으로 Dropdown은 위의 글씨가 나타나고 누르면 아래의 창이 나오게 하는 부분과 위의 창을 누르면 나왔다가 다시 누르면 사라지는 창 이 두부분으로 나누어 만들었고 우선적으로 그냥 클릭하면 위의 고정되어 있는 창에 클릭한 내용이 들어가는 식으로 만든 후에 검색 필터링 기능을 추가 해주었습니다. 필터링 부분은 역시 useState를 사용하여 input창의 내용이 바뀔때마다 필터를 적용하여 필터 된 내용이 나오도록 만들었습니다. 또한 간단하지만 스크롤 기능을 추가해 원하는 크기의 하위 메뉴가 나오도록 하였습니다.
