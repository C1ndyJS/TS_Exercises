(()=>{
  type Sizes = 'S' | 'M' | 'L';
  type Product ={
    title: string,
    cretaedAt: Date,
    stock: number,
    size? : Sizes
  }

  const products:Product[] =[]

//arrow function
const addProduct = (data: Product )=>{
  products.push(data);
}

addProduct({
  title : 'nuevo producto',
  cretaedAt: new Date(1998, 3, 5),
  stock: 100,
});

addProduct({
  title : 'nuevo producto',
  cretaedAt: new Date(1998, 3, 5),
  stock: 100,
  size: 'M'
});
console.log(products);
 products.push({title : 'nuevo producto',
 cretaedAt: new Date(1998, 3, 5),
 stock: 100,
 size: 'M'})
})();
