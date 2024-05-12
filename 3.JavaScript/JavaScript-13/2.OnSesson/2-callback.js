const number=[1,2,3,4,5,6,7,8,9,10];

// Defayt value takes when deos not pass the any valule to the argument
const greet =(name,greeting='hello')=>console.log(`Welcome ${name} ${greeting}`);

greet("Abhihek","Goodorning")
greet("Soni")


// iife function

(function show(){
    console.log("i am iife function")
})();