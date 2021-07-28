const clock = document.querySelector("h2#clock");

function getClock(){

    const date = new Date();
// Js안에 기계 객체가 있음 --> 그것을 아래 방식으로 구현

const year =  String(date.getFullYear()).padStart(2,"0");
const month = String(date.getMonth()).padStart(2,"0");
const day =   String(date.getDate()).padStart(2,"0");
const hours=  String(date.getHours()).padStart(2,"0");
const min=    String(date.getMinutes()).padStart(2,"0");
const sen=    String(date.getSeconds()).padStart(2,"0");


const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let week = daysOfWeek[date.getDay()];
// A.padStart(2,"0") --> (A스트링임!)A의 글자 수가 두개 보다 모질라면 
// "0"부터 시작해서 0A가 됨 -cf- A.padEnd(2,"0")일 경우는 반대   


clock.innerText=
(`${year}.${month}.${day}(${week}) - ${hours}:${min}:${sen}`);


}


setInterval(getClock,1000);




//setInterval(sayHello,5000); //setInterval(실행할 함수, 5000ms(5초 간격으로 계속 작동))
//setTimeout(sayHello,5000);    //setTimeout(실행할 함수,5000 후 작동후 종료)

