"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100; // number
    myDynamicVar = null;
    myDynamicVar = {}; // Object
    myDynamicVar = ""; // string
    myDynamicVar = 'Hola';
    //casting
    const rta = myDynamicVar.toLowerCase(); //Ahora trata a dinamycVar como string
    console.log('rta', rta);
    myDynamicVar = 123;
    const rta2 = myDynamicVar.toFixed(); //Ahora trata a dinamycVar como number
})();
