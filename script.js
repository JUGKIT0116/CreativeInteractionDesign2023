document.write("Hello,world!");

function sayHello(){
   var response = prompt("What is your name?");
   alert("Hello" + response + ",have a nice day!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(18,17));

function showTopic(){
  var x = document.getElementById("demo");
  x.style.fontSize="25px";
  x.style.color="red";
}
