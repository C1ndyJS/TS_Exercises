(()=>{
  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string
  myDynamicVar = 'Hola'
  //casting
  //const rta=(myDynamicVar as string).toLowerCase(); //Ahora trata a dinamycVar como string
  //console.log('rta', rta)


  //myDinamicVar = (<string>myDynamicVar).toLowerCase(); //Ahora trata a dinamycVar como number

})();
