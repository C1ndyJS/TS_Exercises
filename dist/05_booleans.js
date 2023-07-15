"use strict";
(() => {
    let isEnable = true;
    //isEnable = false;
    //isEnable = 1;
    let isNew = true;
    console.log('isNew ', isEnable);
    isNew = false;
    const random = Math.random() * 10;
    console.log('random', random);
    isNew = random >= 0.5 ? true : false;
    console.log('isNew', isNew);
})();
