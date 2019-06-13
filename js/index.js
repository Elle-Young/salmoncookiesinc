'use strict';

Var times = [ '6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minC, maxC, avgS){
  this.name = name;
  this.minC = minC;
  this.maxC = maxC;
  this.avgS = avgS;
  this.salesArray = [];
  Store.list.push(this);
}


new Store('Pike Place', 23, 65, 6.5)
new Store('Seatac', 3, 24, 1.2)
new Store('SeaCentr', 11, 38, 3.7)
new Store('Cap Hill', 20, 38, 2.3)
new Store('Alki', 2, 16, 4.6)


// var seaCntr ={
//   min: 11,
//   max: 38,
//   avgS: 3.7,
//   randomNumber: function(){
//     Math.floor((Math.random() * 10)+1);}
// };
// var capH ={
//   min: 20,
//   max: 38,
//   avgS: 2.3,
// };
// var alki ={
//   min: 2,
//   max: 16,
//   avgS: 4.6,
//   randomNumber: function(){
//     Math.floor((Math.random() * 10)+1);
//   }
// };

