// ++++++++++ Activity 1 +++++++++++

function evenOdd(num){
    if( ( num & 1 ) == 1 )
        return `${num} is an odd number`;
    else
        return `${num} is an even number`;
}


function calculateSquare(num){
    return `Sruare of ${num} is: ${num * num}`
}

console.log(evenOdd(5));
console.log(calculateSquare(6) + '\n');


// ++++++++++ Activity 2 +++++++++++

const maxOfTwoNumbers = function(num1,num2){
    if( num1 > num2 )
        return `${num1} is greater`
    else
        return `${num2} is greater`
}

const concatString = function(str1 , str2){
    return `${str1}${str2}`;
}

console.log(maxOfTwoNumbers(45,12));
console.log(concatString('Code','Quotient') + '\n');


// ++++++++++ Activity 3 +++++++++++

const sum = (num1,num2) => {
    return `Sum of ${num1} + ${num2} is: ${num1 + num2}`
}

const matchCharacter = (str,ch) => {
    return str.includes(ch);
}

console.log(sum(8,9));
console.log(matchCharacter('kida','7') + '\n');


// ++++++++++ Activity 4 +++++++++++

function productof2(num1 , num2 = 0){
    return `Product of ${num1} and ${num2} is: ${num1 * num2}`
}

function greetings(name,age = 2){
    return `Hello Mr.${name}. Your age is ${age}.`
}

console.log(productof2(2,3));
console.log(greetings('hitesh',34) + '\n');


// ++++++++++ Activity 6 +++++++++++

const higherOrderFunction = (func,num) => {
    return function() {
        for (let i = 0; i < num; i++) {
           func();
            
        }
    };
};

function sayHello() {
    console.log('Hello EveryOne');
}

const repeatFunction =  higherOrderFunction(sayHello,3);
repeatFunction();



const applyFunctions = function(func1, func2, value) {
    return func2(func1(value));
}


const addOne = x => x + 1;
const square = x => x * x;

const result = applyFunctions(addOne, square, 5);
console.log(result);