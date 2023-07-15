"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100; // number
    myDynamicVar = null;
    myDynamicVar = {}; // Object
    myDynamicVar = ""; // string
    myDynamicVar = 'Hola';
    //casting
    //const rta=(myDynamicVar as string).toLowerCase(); //Ahora trata a dinamycVar como string
    //console.log('rta', rta)
    const rta2 = myDynamicVar.toLowerCase(); //Ahora trata a dinamycVar como number
    myDynamicVar = 'Holi';
})();
