// ++++++++++ Activity 1 ++++++++++

class Person {
    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greetings(){
        return `Good Morning`
    }
    updateAge(age){
        return this.age = age;
    }
    static stgreetings(){
        return "Welcome to coder community"
    }
    get fullName(){
        return `My full name is ${this.firstName} ${this.lastName}`
    }
    set updateFirstName(firstName){
        this.firstName = firstName;
    }

    set updateLastName(lastName){
        this.lastName = lastName;
    }
}

const onePerson = new Person('rudar',20)
console.log(onePerson.greetings());
console.log(onePerson.updateAge(21));


// ++++++++++ Activity 2 ++++++++++

class Student extends Person {

    static totalStudent = 0 ;

    constructor(name,age,studid) {
        super(name,age);
        this.studid = studid;
        Student.totalStudent++;
    }
    getStudentId(){
        return this.studid
    }
    greetings(){
        return `Good Morning by ${this.studid}`
    }
}

const studentOne = new Student('nangal',20,1316);
console.log(studentOne.getStudentId());
console.log(studentOne.greetings());


// ++++++++++ Activity 3 ++++++++++


 console.log(Person.stgreetings());
 console.log(Student.totalStudent);
 

// ++++++++++ Activity 4 ++++++++++


const ppl = new Person("Rudar", "Attri", 19)
console.log(ppl.fullName); 

ppl.updateFirstName = "Rohit";
ppl.updateLastName = "Nangal";
console.log(ppl.fullName); 


// ++++++++++ Activity 5 ++++++++++

class Account {
    balance = 0;

    constructor(bal) {
        this.balance = bal;
    }

    deposit(money) {
        this.balance += money;
        return this.balance;
    }

    withdraw(money) {
        this.balance -= money;
        return this.balance;
    }
}

const acc = new Account(5000);
console.log(acc.balance);      
console.log(acc.deposit(500)); 
console.log(acc.withdraw(2000)); 




