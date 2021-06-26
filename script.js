let btnaction = document.querySelector('button')
btnaction.addEventListener('click' , funcName)

function funcName(){
    alert('This is the message here')
}

var name = "Ashish";
var age = 21;
console.log("My name is " + name);
console.log("My age is " + age);
console.log("The datatype of age is " + (typeof age));

//Primitives data Types
//String
//Numbers
//Boolean
//Null (null)
//Undefined (undefined)



//Reference Data Types
//typeof will always return object for this DataType

//Array
let myarr = [1,2,3,4,5]
console.log(myarr)

let myotherarr = [1,'2' , "string" , 4.5 ] //this is also allowed in javaScript
console.log(myotherarr)

//Objects Literals
let stMarks = {
    Ashish: 94,
    Prakash: 91,
    Abhishek: 92,
    Ayush: 81
}
console.log(stMarks);

function newFunc(){

}
console.log(typeof newFunc);


let date = new Date(); //this will return the current date and time
//it will include all the things from data , day , month , year  , everything
//This will also include complete time in seconds , minute and hour
console.log(date);