(()=>{
  type Sizes = 'S' | 'M' | 'L' ;
  function createProductToJson(
    title: string,
    cretaedAt: Date,
    stock: number,
    size : Sizes
  ) {return{
    title,
    cretaedAt,
    stock,
    size
  }
  }

const producto1 = createProductToJson('Shoes', new Date(), 100, 'S');
console.log('producto1', producto1);
console.log('Strock', producto1.stock);

//Arrow Functions
const createProductToJson2 = (
    title: string,
    cretaedAt: Date,
    stock: number,
    //size : Sizes |undefined //Para que sea opcional
    size? : Sizes | undefined //Para que sea opcional
    ) => {return{
    title,
    cretaedAt,
    stock,
    size
}
}

const producto2 = createProductToJson2('Shoes', new Date(), 100);
console.log('producto2', producto2);
console.log('Strock', producto2.stock);



})();
