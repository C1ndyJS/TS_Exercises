"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: 'cindy.jimenez@utp.edu.co',
        password: 123456
    }); //llamo a la funcion y le mando los datos
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
})();
