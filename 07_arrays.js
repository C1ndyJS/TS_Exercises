"use strict";
(() => {
    let prices = [100, 75, 42, 35, 10, 'hola', true];
    //  prices.push('55');
    //  prices.push(true);
    //  prices.push({});
    let products = ['Pan', 'Leche', true];
    products.push('Galletas');
    //Definicion de un aray con type Annotation
    let mixed = ['hola', true];
    mixed.push(1);
    mixed.push('adios');
    mixed.push(false);
    console.log('mixed', mixed);
    //let numbers  = [1,2,3,4,6, 'x', 7,8,9,10];
    let numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
    numbers.map(item => item * 2);
})();
