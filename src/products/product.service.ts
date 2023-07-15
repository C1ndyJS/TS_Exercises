import {Product} from './product.model';

export const products : Product[] =[];
export const addProducts = (data: Product)=>{
  products.push(data);
}

export const calcStock = (): number =>{
  let total = 0;
  products.forEach(Item=>{
    total += Item.stock;
  });
  return total;
};
