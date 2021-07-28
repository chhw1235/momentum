const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";


let toDos = [];
//const toDos = [];
//이렇게 비워 졌있으면 새로고침하고 입력하면 전에 것이 사라지고
//할때 마다 다 새로운게 됨

function saveToDos(){
localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
//JSON.stringify() -->괄호에 안에 들어 있는 아무JS코드를 
//배열만들어 값을 스트링으로 만든 후 집어넣어 버림
}

function deleteToDo (event){
const li = event.target.parentElement;
li.remove();


toDos = toDos.filter((toDos)=>toDos.id != parseInt(li.id));
//((toDos)=> 방향표는 옆의 조건을 가진 함수로 보낸다는 것
//li.id는 String이라서 parseInt()를 통해 인트로 봐꿔야함 
saveToDos() // 위에서 제거 후 새로운 배열을 업데이트
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    console.log(newTodo.id);
const span = document.createElement("span");
const button = document.createElement("button");
button.innerText ="X";
button.addEventListener("click",deleteToDo);


li.appendChild(span); // li는 span을 자식으로 가지고
li.appendChild(button); // li는 span을 자식으로 가지고
span.innerText = newTodo.text; // 그 span안에 newToDo를 넣음
toDoList.appendChild(li);
 
}

function handleToDoSubmit(event){
event.preventDefault();

const newTodo = toDoInput.value;
toDoInput.value="";
const newTodoObj={
 text: newTodo,
 id: Date.now(),

};

toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos!=null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
parsedToDos.forEach(paintToDo);
//parsedToDos 배열에 들어 있는 변수의 갯수 만큼 forEach문이 작동
}

/*
.filter 함수 - array에 먼가를 지울 때 
array를 통으로 지우고 필요한 것들만 담아서 만듬

funtion sss(item){return item != 3}
[1, 2, 3, 4].filter(sss)

3만 빼려고 함
sss(1).filter == 1
sss(2).filter == 2
sss(3).filter != nothing
sss(4).filter == 4 result --> [1,2,4] 라는 배열을 세로 만듬 
*/

