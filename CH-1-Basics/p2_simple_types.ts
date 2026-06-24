// Basic Types -> primitves

// Boolean -> true/false
let isActive: boolean = false;
let isAdmin = true; // typescript infers 'boolean' type

// Number -> integer and floating point literals
let age: number = 34;
const pi: number = 3.14;

// string -> text data
// can use single quote (') or double quote (") or backticks (`)
let username: string = "Ricky";
let email: string = 'abc@gmail.com';
let greetings: string = `Hello, ${username}`;


// BigInt
const hugeNumber = BigInt(9007199254740991);
console.log(hugeNumber);

// Symbol
const uniqueKey: symbol = Symbol("description");
const obj = {
    [uniqueKey]: "this is a unique property."
};

console.log(obj[uniqueKey]);