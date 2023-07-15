(()=>{
  type IdUser = number | string//Alias de un tipo de dato
  let userId: string | number;
  let customerId: IdUser;


  //Quiero actuar diferente cuando yo reciba un valor o el otro
  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`Hi ${myText.toLowerCase()}`);
    }else{
      myText.toFixed(2);
      console.log('Hi', myText);}
  }
  greeting(1);
  greeting('Daniel');
  //Literal types
  type Sizes = 'S' | 'M' | 'L' ;
  let shirtSize: 'S' | 'M' | 'L'; //Solo puedo asignar esos valores

  function greetingSize(userId: IdUser, size: Sizes){
    if(typeof userId === 'string'){
      console.log(`Hi ${userId.toLowerCase()}`);
    }else{
      userId.toFixed(2);
      console.log('Hi', userId);}
  }
  greetingSize(1121, 'M');
})();
