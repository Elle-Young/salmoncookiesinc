'use strict';

var pike ={
  min: 23,
  max: 65,
  avgS: 6.3,
  randomNumber: numGen(){
    Math.floor((Math.random() * 10)+1);}
}

var seaTac ={
  min: 3,
  max: 24,
  avgS: 1.2,
  randomNumber: function(){
    Math.floor((Math.random() * 10)+1);}
};

var seaCntr ={
  min: 11,
  max: 38,
  avgS: 3.7,
  randomNumber: function(){
    Math.floor((Math.random() * 10)+1);}
};
var capH ={
  min: 20,
  max: 38,
  avgS: 2.3,
};
var alki ={
  min: 2,
  max: 16,
  avgS: 4.6,
  randomNumber: function(){
    Math.floor((Math.random() * 10)+1);}
};

render: numGen(){
  var divElement = document.getElementById('pike');
  var newTitle = document.createElement(h2);
  newTitle.textContent = this.name;
  divElement.appendChild(newTitle);
}
console.log()