'use strict';

// var turing = {
//     temp: 68,
//     light: 9, 
//     dim: function(num){
//         this.light = num;
//         this.heat(57);
//     },
// heat: function(num){
//     this.temp = num;
//     }

// }
var pike ={
  min: 23,
  max: 65,
  avgS: 6.3,
}
getNum: function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(getNum)


var seaTac ={
    min: 3, 
    max: 24,
    avgS: 1.2,
}

var seaCntr ={
    min: 11,
    max: 38,
    avgS: 3.7,
}
var capH ={
    min: 20,
    max: 38,
    avgS: 2.3,
}
var alki ={
    min: 2,
    max: 16,
    avgS: 4.6,
}