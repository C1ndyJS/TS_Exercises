"use strict";
(() => {
    let userId;
    let customerId;
    //Quiero actuar diferente cuando yo reciba un valor o el otro
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`Hi ${myText.toLowerCase()}`);
        }
        else {
            myText.toFixed(2);
            console.log('Hi', myText);
        }
    }
    greeting(1);
    greeting('Daniel');
    let shirtSize; //Solo puedo asignar esos valores
    function greetingSize(userId, size) {
        if (typeof userId === 'string') {
            console.log(`Hi ${userId.toLowerCase()}`);
        }
        else {
            userId.toFixed(2);
            console.log('Hi', userId);
        }
    }
    greetingSize(1121, 'M');
})();
