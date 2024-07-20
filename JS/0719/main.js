// 1. 문서 객체 찾을 때
// const hhh = document.querySelector("div > h1");
const hhh = document.querySelector(".bye");

// 2. 문서 객체 콘텐츠 바꾸는 법
hhh.innerHTML = "<i>sucoding</i>";
hhh.innerText = "<i>sucoding</i>";

// 3. 스타일 주는 법
hhh.style.color = "red";
hhh.style.fontSize = "70px"; // css에서 -표기 되던 부분들을 카멜케이스로 작성해야함

// 4. 클래스 추가하는 법
hhh.classList.add("active");

// 5. 클래스 제거하는 법
hhh.classList.remove("bye");

// 6. 클래스 토글하는 법
// done이라는 클래스가 있으면 제거하고 없으면 추가한다.
hhh.classList.toggle("done");
hhh.classList.toggle("done");
hhh.classList.toggle("done");

// 7. input value 가져오는 법
setTimeout(() => {
  const input = document.querySelector("input");
  console.log(input.value);
}, 2000);

// console.log(hhh);

////////////////////////////// 이벤트 //////////////////////////////

// 이벤트
// 사용자가 웹 페이지의 특정 요소와 상호 작용할 때 발생하는 것.
// 1. 이벤트 타겟 -> 이벤트가 발생한 요소
// 2. 이벤트 타입 -> click, keydown, keyup, mouseover
// 3. 이벤트 핸들러 -> 이벤트가 발생했을 때 실행할 코드
// 4. 이벤트 등록 -> 이벤트 타겟에, 이벤트 타입과 이벤트 핸들러 동작을 등록하는 것을 의미

const input = document.querySelector("input");
// input.addEventListener(이벤트타입, 이벤트핸들러);
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

input.addEventListener("keydown", (event) => {
  console.log(this);
  console.log(event);
  console.log("keydown");
  if (event.key === "Enter") {
    console.log("검색");
    // 검색 로직
  }
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(this);
  console.log(e);
  console.log("click");
});

// 모든 이벤트 핸들러는 내부적으로 이벤트 객체를 전달받는다.
