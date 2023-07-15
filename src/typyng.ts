//Funcion anonima autoinvocada
(() => {

  let myProductName : string = 'product 1';
  let myProductPrice = 23;


  myProductName = 'product 2';
  //cambia el valor de myProductName  a product 2

  myProductName.toLowerCase();
  const myProductStock = 24;
  //Una constante debe ser siempre una constante, no debería cambiar su valor nunca


})();

