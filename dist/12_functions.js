"use strict";
(() => {
    function createProductToJson(title, cretaedAt, stock, size) {
        return {
            title,
            cretaedAt,
            stock,
            size
        };
    }
    const producto1 = createProductToJson('Shoes', new Date(), 100, 'S');
    console.log('producto1', producto1);
    console.log('Strock', producto1.stock);
    //Arrow Functions
    const createProductToJson2 = (title, cretaedAt, stock, 
    //size : Sizes |undefined //Para que sea opcional
    size //Para que sea opcional
    ) => {
        return {
            title,
            cretaedAt,
            stock,
            size
        };
    };
    const producto2 = createProductToJson2('Shoes', new Date(), 100);
    console.log('producto2', producto2);
    console.log('Strock', producto2.stock);
})();
