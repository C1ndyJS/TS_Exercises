"use strict";
(() => {
    const products = [];
    //arrow function
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'nuevo producto',
        cretaedAt: new Date(1998, 3, 5),
        stock: 100,
    });
    addProduct({
        title: 'nuevo producto',
        cretaedAt: new Date(1998, 3, 5),
        stock: 100,
        size: 'M'
    });
    console.log(products);
    products.push({ title: 'nuevo producto',
        cretaedAt: new Date(1998, 3, 5),
        stock: 100,
        size: 'M' });
})();
