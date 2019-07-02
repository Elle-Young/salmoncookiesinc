'use strict';

function hours(){
  var hours = [ '6am', '7am', '8am', '9am', '10am', '11am', 'Noon', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  var locations = ['1st & Pike', 'SeaTac', 'Seattle Center', 'Capiton Hill', 'Alki'];

  function makeRows(){
    hours.forEach(function(hours){
      var row = ('<tr></tr>');
      row.append(('<td></td>').text(hours.hours));
      row.push({
        hours: hours,
        element: row
      });
    });
  }
  makeRows();
}

hours();
