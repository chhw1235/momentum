const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const saverUserName = localStorage.getItem(USERNAME_KEY);

if (saverUserName == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //const loginForm= document.querySelector("#login-form");에서~~
  //"submit" 이벤트가 일어날때 onLoginSubmit(함수)를 작동시키는 코드
} else {
  paintGreetings(saverUserName);
}

function onLoginSubmit(event) {
  event.preventDefault();
  // event라 전달인자(argument)에 정보를 담아 콘솔에 보여주는 것

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernamebyUser = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernamebyUser);
  //localStorage.setItem("저장될 정보의 이름", 저장될 값의 변수이름);

  greeting.innerText = `Glad to meet you!  ${usernamebyUser}`;
  // ''따옴표가 아니라 ``백틱이 필요!!!!
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(saverUserName){
    greeting.innerText = `how are you? ${saverUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

