const quotes = [

{ 
    Quote:"This bud of love, by summer's ripening breath, May prove a beauteous flower when next we meet.",
    Author:"William Shakespeare",
    
},
{ 
    Quote:"Let no one ever come to you without leaving better and happier.",
    Author:"Mother Teresa",
    
},
{ 
    Quote:"Someone's sitting in the shade today because someone planted a tree a long time ago.",
    Author:"Warren Buffett",
    
},
{ 
    Quote:"A good plan, violently executed now, is better than a perfect plan next week.",
    Author:"George S. Patton",
    
},
{ 
    Quote:"Those who cannot remember the past are condemned to repeat it.",
    Author:"George Santayana",
    
},
{ 
    Quote:"There is never enough time, unless you're serving it.",
    Author:"Malcolm Forbes",
    
},
{ 
    Quote:"I know, somehow, that only when it is dark enough can you see the stars",
    Author:"Martin Luther King, Jr",
    
},
{ 
    Quote:"What does not destroy me, makes me stronger.",
    Author:"Friedrich Nietzsche",
    
},
{ 
    Quote:"Learn as if you would live forever, live as if you would die tomorrow.",
    Author:"Mahatma Gandhi",
    
},
{ 
    Quote:"Life is not fair. Get used to it.",
    Author:"Bill Gates",
    
},
{ 
    Quote:"Everything has the end. even if it is a pain.",
    Author:"Choi",
    
},

];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//"Math"라는 객체이 여러가지 매서드가 이미 있음
//Math.random();를 너으면 0.648747549282241 - 소수점 많음 (Integer이아니라 float라서 그럼) 
//그래서 Math.round()를 이용해 소숫점자리를 때어냄 or Math.ceil()을 이용해 올림 or Math.floor()로 버림을 실행

//console.log(Math.round(Math.random()*10)); --: Math.random()은 소숫점만 나오기에 10을 곱함--한자리 정수가 필요하니까

//console.log(quotes[Math.floor(Math.random()*quotes.length)]);
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.Quote;
author.innerText = todayQuote.Author;
