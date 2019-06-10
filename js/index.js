'use strict';

var turing = {
    temp: 68,
    light: 9, 
    dim: function(num){
        this.light = num;
        this.heat(57);
    },
heat: function(num){
    this.temp = num;
    }

}

console.log(turing);
turing.dim(5);


