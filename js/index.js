'use strict';


var storeInfo = {
  Pike: { 
    minCustomer: 23, 
    maxCustomer: 65, 
    avgSales: 6.5},
  Seatac: {
    minCustomer: 3, 
    maxCustomer: 24, 
    avgSales: 1.2},
  SeaCentr: {
    minCustomer: 11, 
    maxCustomer: 38, 
    avgSales: 6.5},
  Caphill: {
    minCustomer: 20, 
    maxCustomer: 38, 
    avgSales: 2.3},
  Alki: {
    minCustomer: 2,
    maxCustomer: 16, 
    avgSales: 4.6}
};

// function Place(name, minCustomer, maxCustomer){
//   this.name = name;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.hours = [ '6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


  
  
//   function table(){
//   };
 
function(storeInfo){
    var rows = ('<tr></tr>');
    rows.append(('<td></td>').text(storeInfo.name));
    rows.push({
      storeInfo:storeInfo,

    });
  };

// table();
// makeRows();
// console.log(table());
// console.log(makeRows());
// console.log(Place())
// }

storeInfo();