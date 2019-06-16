'use strict';
//global array of hours

//ID DOM Elements
//thead so that I can put the housr in
//tbody so that I can put the locations in
//tfoot so that i can put the totals in

//location constructor
//creat instances of stores with their data
//render stuff out

//---------------------------------------//


var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var thead = document.getElementsByTagName('thead')[0];
var thead = document.getElementsByTagName('tbody')[0];
var thead = document.getElementsByTagName('tfoot')[0];

function addElement(parent, element, content) {
  var newElement = document.createElement(element);
  var textElement = document.createTextNode(content);
  newElement.appendChild(textElement);
  return newElement;
}

function renderHeader(){
  var tr = addElement(thead, 'tr', '');
  for(var i = 0; i <hours.length; i++){
    // var th = document.createElement('th');
    addElement(tr, 'th', hours[i])
    
  }
  addElement(tr, 'th', 'Totals')
}

function renderFooter(){
  var tr = addElement(thead, 'tr', '');
  for(var i = 0; i <hours.length; i++){
    // var th = document.createElement('th');
    addElement(tr, 'th', 0]);
    
  }
  addElement(tr, 'th', 0);
}

function Store(name, minC, maxC, avgS){
  this.name = name;
  this.minC = minC;
  this.maxC = maxC;
  this.avgS = avgS;
  this.salesArray = [];
  // Store.list.push(this);
}


new Store('Pike Place', 23, 65, 6.5);
new Store('Seatac', 3, 24, 1.2);
new Store('SeaCentr', 11, 38, 3.7);
new Store('Cap Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function renderHeader();
fucntion renderFooter();

