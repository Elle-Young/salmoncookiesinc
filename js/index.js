'use strict';


function Storeinfo(name, minCustomer, maxCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  Storeinfo.list.push(this);
}

Storeinfo.list =[];


new Storeinfo('Pike', 43, 65, 6.5); //0
// new Place('PINE', 23, 99, 8.5); //1
// new Place('Alki', 13, 65, 6.0); //2
console.log(Storeinfo.list[0]);
function table(){
}

function makeRows(){
  var rows = ('<tr></tr>');
  rows.append(('<td></td>').text.Storeinfo(name));
  rows.push({
    storeInfo:Storeinfo,

  });
}

table();
makeRows();
console.log(table());
console.log(makeRows());
// console.log(Place());
console.log(Storeinfo.list[0]);
