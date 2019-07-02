'use strict';


function Place(name, minCustomer, maxCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  Place.list.push(this);
}

Place.list =[];

Place.prototype.render = function(){
  var tableBody = document.getElementById('stores');
  var tableRow = document.getElementById('tr');
  var cell = document.getElementById('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);
  cell = document.createElement('td');cell.textContent = this.minCustomer;
  tableRow.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = this.maxCustomer;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};

new Place('Pike', 23, 65, 6.5);
new Place('Pike', 23, 65, 6.5);
new Place('Pike', 23, 65, 6.5);
//   function table(){
//   };
 
// function(storeInfo){
//     var rows = ('<tr></tr>');
//     rows.append(('<td></td>').text(storeInfo.name));
//     rows.push({
//       storeInfo:storeInfo,

//     });
//   };

// table();
// makeRows();
// console.log(table());
// console.log(makeRows());
// console.log(Place())
// }

// storeInfo();