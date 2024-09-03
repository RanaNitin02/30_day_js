// ++++++++++ Activity 1 ++++++++++

function one(name){
   return function (){
        console.log(`My name is ${name}`);
    }
}
one("Raj")();


function incrementCount1(count){
    return function(){
        count++;
        console.log(`Current value of count: ${count}`);
        
    }
}
incrementCount1(5)();


// ++++++++++ Activity 2 ++++++++++

console.log("Hello world");
"kida"
