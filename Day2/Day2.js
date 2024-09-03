//  ++++++++++ Activity 1 ++++++++++

function add(num1,num2) {
    return num1 + num2 ;
}

function sub(num1,num2) {
    return num1 - num2 ;
}

function mul(num1,num2) {
    return num1 * num2 ;
}

function div(num1,num2) {
    if(num1 > num2){
        return num1 / num2 ;
    }else{
        return num2 / num1 ;
    }
}

function getRemainder(num1,num2) {
    if(num1 > num2){
        return num1 % num2 ;
    }else{
        return num2 % num1 ;
    }
}

console.log(add(10,15));
console.log(sub(23,30));
console.log(mul(45,82));
console.log(div(37,5));
console.log(getRemainder(59,73));

console.log('\n');

// +++++++++ Activity 2 ++++++++++

let firstNumber = 10 ;
firstNumber += 10 ;
console.log(firstNumber);


let secondNumber = 10 ;
secondNumber -= 10 ;
console.log(secondNumber);

console.log('\n');

// +++++++++ Activity 3 ++++++++++

function smallerNumber(num1 , num2){
    if( num1 > num2 )
        return `${num1} is greater`;
    else
        return `${num2} is greater`;
}

function greaterNumber(num1 , num2){
    if( num1 < num2 )
        return `${num1} is smaller`;
    else
        return `${num2} is smaller`;
}

function greaterEqualNumber(num1 , num2){
    if( num1 >= num2 )
        return `${num1} is greater or equal`;
    else
        return `${num2} is greater or equal`;
}

function smallerEqualNumber(num1 , num2){
    if( num1 <= num2 )
        return `${num1} is smaller or equal`;
    else
        return `${num2} is smaller or equal`;
}

function EqualNumbers(num1 , num2){
    if( num1 == num2 )
       return `${num1} and ${num2} are equal`;
    else
        return `${num1} and ${num2} are not equal`;
}

function typeEqualNumber(num1 , num2){
    if( num1 == num2 )
        return `${num1} and ${num2} are equal in type and value`;
    else
        return `${num1} and ${num2} are not equal in type and value`;
}

console.log(greaterNumber(5,10));
console.log(smallerNumber(5,10));
console.log(greaterEqualNumber(5,10));
console.log(smallerEqualNumber(5,10));
console.log(EqualNumbers(5,10));
console.log(typeEqualNumber(5,10));

console.log('\n');

// +++++++++ Activity 4 ++++++++++

function largetNumber(num1,num2,num3){
    if( num1 > num2 && num1 > num3 )
        return `${num1} is greater`;
    else if( num2 > num1 && num2 > num3 )
        return `${num2} is greater`;
    else
        return `${num3} is greater`;
}

function divisibleBy3Or5(num) {
    if( num % 3 == 0 || num % 5 == 0 )
        return `${num} is divisible`;
}

let found = true ;


console.log(largetNumber(4,5,6));
console.log(divisibleBy3Or5(15));
console.log(!found);

console.log('\n');


// ++++++++ Activity 5 ++++++++++

function checkNumber(num) {
    return num > 0 ? `${num} is +ve` : `${num} is -ve`;
}

console.log(checkNumber(13));