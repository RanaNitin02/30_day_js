// ++++++++++ Activity 1 +++++++++++
function sum(a, b) {
    return a + b;
}

let person = {
    name: "Rana",
    age: 19,
    getDetails: function () {
        return `Name is ${this.name} and Age is ${this.age}`;
    }
}

export const obj1 = {
    sum,
    person
};

// ++++++++++ Activity 2 +++++++++++
function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

export const obj2 = {
    sum,
    mul,
    div
};

export default function (a, b) {
    return a * b;
}

// ++++++++++ Activity 3 +++++++++++
const num = 12;
const str = "abcd";

function sumActivity3(a, b) {
    return a + b;
}

export const obj3 = {
    num,
    str,
    sum: sumActivity3
};
