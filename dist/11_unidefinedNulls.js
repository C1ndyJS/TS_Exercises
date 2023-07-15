"use strict";
(() => {
    function saludar(name) {
        let hello = 'Holi';
        if (name) {
            hello += name.toLowerCase();
        }
        else {
            hello += 'none';
        }
        console.log(hello);
    }
    saludar('Daniel');
    saludar(null);
    function saludar2(name) {
        let hello = 'Holi';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'none';
    }
    //? este signo de pregunta verifico is algo es nulo o undefined
    saludar2('Daniel');
    saludar2(null);
    saludar('Mateo');
})();
