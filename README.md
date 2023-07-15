JavaScript Es muy flexible, yo puedo declarar una variable de un tipon valor y a lo latrgo de mi codigo ir cambiando ese tipo de acuerdo a lo que se desea 
, es decir que puedo tener una variable tipo bool y a cambiandolo posteriormente esa variable ser de tipo dstring si así lo necesito 

# Controlando la flexibilidad
const productPrice = 12 
const productPrice: number  = 12 
cons  declaracion: tipado(type annotation) = valor
# type annotation
Asignación del tipo de dato

# Funcion Anonima AutoInvocada
 Me permite utilizar el mismo nombre de variables dentro de diferentes archivos, las trata dentro de un mismo scop

# Tipos Inferidos
TypeScript puede inferir el tipo de dato de una variable a pesar de no haberlo declarado explícitamente.
# Tipos de datos primitivos 
numbers 
booleans 
string //Las puedo definir con comillas simples, con comillas doble
let myProduct = 'Soda'; //CORRECTO
let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO


# Steps to Run 
npx tsc src ejemplo.ts
npm src/ejemplo.js
# Node y browser run JS
npx tsc src/hello.ts --outDir dist
npx tsc src/cart.ts --outDir dist
# By default target is ES3
npx tsc src/cart.ts --outDir dist --target ES6
