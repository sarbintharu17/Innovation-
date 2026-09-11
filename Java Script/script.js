// console.log("Hello world")

// data types 

//string

// x = "hello"
// y = 'hi'

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof "Ram")
// console.log(x.length)


// // Integer, Number

// a = 5
// console.log(typeof a)

// b = "6"
// console.log(typeof b)

// statement = true

// console.log(typeof statement)

// Variable declaration
// let, var, const

// {
//    let naam = 1
//    console.log(naam)
// }

// console.log(naam)

// {
//    var naam = 1
//    console.log(naam)
// }

// console.log(naam)

// let x = 5;
// const y = 5;

// x = 6;
// console.log(x)

// y = 6;
// console.log(y)

// pre increment

// let x = 5
// console.log(++x)

// //  post increment

// let y = 5
// console.log(y++)
// console.log(y)

// operators

// arithemtic operators

// + - * / %

// console.log(1+2)
// x = 1
// y = 2
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)

// console.log(5/2)
// console.log(5%2)


//  Logical Operators

// AND OR NOT

//  AND -> &&
// OR -> ||
// NOT -> !

// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// console.log(true ||true)
// console.log(true ||false)
// console.log(false || false)

// console.log(!true)
// console.log(!false)


// relational operator

// ==, >, <, >=, <=, !=, ===

// console.log(5 == "5")
// console.log(5 === "5")

// console.log(4>5)
// console.log(4<5)

// console.log(4<=5)
// console.log(5<=5)

// console.log(4!= 5)
// console.log(5!=5)

// if(false){
//     console.log("if block executed")

// }else if(false){
//     console.log("elseif block executed")
// }
// else{
//     console.log("else block executed")    
// }


// const number = 0

// if(number>0){
//     console.log<("positive")

// }
// else if(number>0){
//     console.log("negative")
// }
// else if(number == 0){
//   console.log("zero")
// }

// let age = 20

// if(age>50){
//     console.log("senior citizen")
// }else{
//     if(age>=20){
//         console.log("adult")
//     }else{
//         console.log("minor")
//     }
// }

// task

// check eligiblity to give exam
// 1 => fee cleared or not, scholarship->eligible
// 2 => attendance fulfill, not -> leaveinformed
// 3 => backlog
// 4 => want to give exam

// feecleared = true, false
// scholarshipGranted = true, false
// attendancefullfill = true, false

// var wannaGiveExam = true;
// var backlog = true;
// var attendanceFulfill = true;
// var feeCleared = false;
// var scholarshipGranted = false;

// if (wannaGiveExam == true) {

//     if (feeCleared == true || scholarshipGranted == true) {

//         if (attendanceFulfill == true) {

//             if (backlog == false) {
//                 console.log("Eligible for exam");
//             } else {
//                 console.log("You have backlog");
//             }

//         } else {
//             console.log("Attendance not fulfilled - Leave informed");
//         }

//     } else {
//         console.log("Fee not cleared");
//     }

// } else {
//     console.log("You don't want to give the exam");
// }

// ternary operator

// if(condition){

// }else{

// }

// (condition ? "first statement" : "second statement")

// let x = (4>5) ? "true" : "false"

// console.log(x)

// switch
// initialize var

// var ticketNumber = 200

// switch(ticketNumber){
//     case 100:
//         console.log("bahubali movie")
//         break
//     case 200:
//         console.log("Gajani")
//         break
//     case 300:
//         console.log("KGF")
//         break
//     default:
//         console.log("invalid ticket number")
//         break
// }

// string

// let myString = "i like that car's color"
// console.log(typeof myString)
// console.log(myString)

// let sentence = `i like that car's color "black"`
// console.log(typeof sentence)
// console.log(sentence)

// concatenation / interpolation

//  add two strings

// let fName = "keshab"
// let lName = "bc"

// let fullName = fName +" "+ lName
// console.log(fullName)

// let rollNo = 5
// let marks = 3.00

// console.log("Student whose roll number is " + rollNo +"got GPA "+marks)

// console.log(`student whose roll number is ${rollNo} got GPA ${marks}`)

// let dsa = 40
// let dbms = 45

// console.log(dsa + dbms)
// console.log("he got total marks: "+(dsa+dbms))
// console.log(`he got total marks: ${dsa + dbms}`)

// for(initialize, condition, operation){
// statement
// }

// for(let a = 1; a<=5; a++)
//     {
//         if(a == 3)
//         {
//             // continue
//             break
//         }
//         console.log(a)
//     }

// for(let a = 1; a<=20; a++){
//     if(a%2 !== 0){
//         continue
//     }
//     console.log(2+"*"+ a+ "=" +(2*a))
// }

// let a = 1
// while(a <= 5){
//     console.log(a)
//     a++
// }

// function sayHello(){
//     console.log("Hello")
// }

// sayHello()

// parameters and arguments

// function greet(name){
//     console.log(`hello ${name}`)
// }
// greet("Mohan")

// return

// function addNum(a, b){
//     return a + b
// }
// if(addNum(2,2)>4){
//     console.log("Greater")
// }
// // console.log(addNum(2,3))

// let result = addNum(5,6)
// console.log(result)

// if(addNum(3,4)){
//     console.log("printed")
// }
// expression function
// const myFunction = function(name){
//     console.log("hello "+name)
// }

// myFunction("hari")
// // arrow function

// const anotherFunction = (name) =>{
//     console.log("hello "+name)
// } 
// anotherFunction("Ram")

// Ternary Operator
// (condition ? "First statement" : "Second statement")

// let x = (4>5) ? true : false;
// console

// Switch Statement
// intialize a variable

// var ticketNumber = 200

// switch(ticketNumber){
//     case 100:
//         console.log("Bahubali Movie")
//         break;
//     case 200:
//         console.log("Gajani")
//         break;
    
//     case 300:
//         console.log("KGF")
//         break;
    
//     default:
//         console.log("Invalid ticket number")
//         break
// }

// String

// let myString = "Hello World"
// console.log(typeof myString)

// let sentence = `i like that car's color "black"`
// console.log(sentence)

// Concatination / Interpolation
// add two strings

// let fName = "Bikash"
// let lName = "Chaudhary"

// let fullName = fName + lName
// console.log(fullName)

// let rollNo = 5
// let marks = 90

// console.log("Student whose roll number is " + rollNo + " got gpa " + marks)

// console.log(`Student whose roll number is ${rollNo} got gpa ${marks}`)


// let dsa = 40
// let dbms = 45

// console.log(dsa + dbms)
// console.log("He got total marks: " +(dsa+dbms))

// console.log(`He got total marks: ${dsa + dbms}`)

// STRING LENGTH
// Returns the number of characters in a string
// let str = "Hello World"
// console.log(str.length)


// charAt()
// Returns the character at the specified index
console.log(str.charAt(1))


// // charCodeAt()
// // Returns the Unicode (ASCII) value of a character
// console.log(str.charCodeAt(0))

// // codePointAt()
// // Returns the Unicode code point of a character
// console.log("😊".codePointAt(0))

// // concat()
// // Joins two or more strings

// let firstName = "Bikash"
// let lastName = "Chaudhary"
// console.log(firstName.concat(" ", lastName))

// // at()
// // Returns character at a given index
// // Supports negative indexing
// console.log(str.at(0))
// console.log(str.at(-1))

// // [] Bracket Notation
// // Accesses character using index
// console.log(str[4]); // o


// // slice(start, end)
// // Extracts part of a string
// // End index is not included
// // Supports negative indexes
// console.log(str.slice(0, 5))
// console.log(str.slice(-5))

// // substring(start, end)
// // Similar to slice()
// // Does NOT support negative indexes
// console.log(str.substring(0, 5))

// // substr(start, length)
// // Extracts characters using length
// // Deprecated (avoid in modern code)
// console.log(str.substr(6, 5))

// // toUpperCase()
// // Converts all letters to uppercase
// console.log(str.toUpperCase())


// // toLowerCase()
// // Converts all letters to lowercase
// console.log(str.toLowerCase())

// // isWellFormed()
// // Checks if a string contains valid Unicode
// console.log("Hello".isWellFormed())

// // toWellFormed()
// // Replaces invalid Unicode sequences
// console.log("Hello".toWellFormed())


// // trim()
// // Removes spaces from both ends
// let name = "  Bikash  "
// console.log(name.trim())

// // trimStart()
// // Removes spaces from the beginning
// console.log(name.trimStart())


// // trimEnd()
// // Removes spaces from the end
// console.log(name.trimEnd())


// // padStart(targetLength, padString)
// // Adds characters at the beginning
// console.log("5".padStart(3, "0"))


// // padEnd(targetLength, padString)
// // Adds characters at the end
// console.log("5".padEnd(3, "0"))


// // repeat()
// // Repeats a string specified number of times
// console.log("Hi ".repeat(3));

// // replace()
// // Replaces only the first occurrence
// let language = "Java is good. Java is powerful."
// console.log(language.replace("Java", "Python"))


// // replaceAll()
// // Replaces all occurrences
// console.log(language.replaceAll("Java", "Python"));


// // split()
// // Converts a string into an array
// let fruits = "Apple,Banana,Mango";
// console.log(fruits.split(","));

