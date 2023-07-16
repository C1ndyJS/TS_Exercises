(()=>{
  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string
  myDynamicVar = 'Hola'
  //casting
  let rta=(myDynamicVar as string).toLowerCase(); //Ahora trata a dinamycVar como string
  console.log('rta', rta)
  rta = (<number>myDynamicVar).toPrecision(); //Ahora trata a dinamycVar como number

})();
