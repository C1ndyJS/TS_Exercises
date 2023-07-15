"use strict";
(() => {
    //Puedo tener dos posibles tipos de datos
    let userId;
    userId = 123;
    userId = 'Cindy';
    //userId = true; incorrect
    //Quiero actuar diferente cuando yo reciba un valor o el otro
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log('Hi', myText);
        }
        else {
            myText.toFixed(2);
            console.log('Hi', myText);
        }
    }
    greeting(1);
    greeting('Daniel');
})();
