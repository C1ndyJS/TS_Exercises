
export type Sizes = 'S' | 'M' | 'L';
export type Product ={
  title: string,
  cretaedAt: Date,
  stock: number,
  size? : Sizes
}
