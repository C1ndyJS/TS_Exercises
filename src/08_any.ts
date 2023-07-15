(()=>{
  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string
  myDynamicVar = 'Hola'
  //casting
  const rta=(myDynamicVar as string).toLowerCase(); //Ahora trata a dinamycVar como string
  console.log('rta', rta);

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed(); //Ahora trata a dinamycVar como number

})();
