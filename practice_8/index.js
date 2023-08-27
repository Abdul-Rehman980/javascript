// console.log("hello")
// console.log("hellodfdsfgdfgb")


// let a = null;
// let b = 457;
// let c = "stery";
// let d = true ;


// console.log(typeof d);
// console.log(typeof a);
// console.log(typeof c );
// console.log(typeof b);


let st = "Apple";
let b = 34;
console.log(st+b);
console.log(b+st);

console.log(typeof (b+st) );




const obj= {
    name : "abdul",
    age : 23,
    height :5,

}

console.log(obj);

console.log(obj["height"]);

  obj.email  = "iugfihv";

console.log(obj);

obj["name"]= "Ali";
console.log(obj)
obj["namde"]= "dfss";
console.log(obj)
console.log(obj.email)
console.log(obj["height"]);

const c = 6
const d = 5
console.log("c+d=",c+d)
console.log("c*d=",c*d)
console.log("c-d=",c-d)
console.log("c/d=",c/d)
console.log("c%d=",c%d)

//console.log("++d=",--d)






let dd = 45;
dd+=5
console.log("dd =",dd) 
dd/= 5
console.log("dd =",dd) 
dd-=5
console.log("dd =",dd) 


//comparing


let a = 6;
let e  =7;
console.log("a==e",a==e)
console.log("a!=e",a!=e)

console.log(a!=e)



console.log("a<=e",a<=e)
console.log("a<e",a<e)
console.log("a>=e",a<e)


let x = 6;
let y  ="6";

console.log("x===y",x===y)
console.log("x!==y",x!==y)

console.log("a<e"&&a<e)
console.log("a<e"||a<e)

console.log(a>e&& a==6 )
console.log(a>e|| a==6 )


console.log(!true)
console.log(!false)

// g=4
// if (g=0){
//     alert("not a valid age");
// }
// else{
//     alert("done");
// }
// console.log(g=65)


let hour=19;
if (hour < 18) {
   console.log( "Good day");
  }
else{
  console.log("GoodEvening");
}
 
let age1 = 16+2
if (age1<18){
  console.log("Not eligible for bike riding");
}
else {
  console.log(" eligible for bike riding");
}





// let rain = false
// if (rain==true){
//   console.log("pickup unmbrelaa")


// }
// else {
//   console.log(" Do not pickup unmbrelaa")
// }

  //{{code is not Generic}}}}

// let age = 34;
// if (a<=0){
//   console.log("you are so small for bike");
// }
// else if (a<=12){
//   console.log("still small");
// }
// else if(a<=18 && a>=9){
//   console.log("wait for eightreen");
// }
// else  {
//   console.log("you can drive the car");
// }



// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }



// let rain = false
// if (rain==true){
//   console.log("pickup unmbrelaa")


// }
// else {
//   console.log(" Do not pickup unmbrelaa")
// }

// //terneri Operator
// console.log("unmbrella",(rain=false? "pick" : "notpick"))


marks = 4
console.log("makrs", (marks>10? "pass" : "fail")  )  



const age = 21;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"


const weight = 70;
const fitness = weight >=75? "gym ": "GOOd"; 
console.log(fitness);


// const a = 0;
// const JS_Harry = a==0 ? "fun":"tulllu";
// console.log(JS_Harry);
//[[Practice 2222222 Harry]]

let age2 = 16-7
if (age2>10 && age2<20){
  console.log("Your age is lies there")
}
else {
  console.log("Your age is not lies there")
}




// use of switch case

let fruit = "apple";
switch (fruit){
  case "apple":
  console.log("one apple a day keeps doc away");
  break;
  case "mango":
    console.log("only summers fun");
    break;
    case "orange":
   console.log("only winter fun");  
    break;
    case "banana":
      console.log("round the year");

}
//use of switch case 


//make a functions that is divisble by 2 and 3 and conlsole it
let num = 8
if (num % 2 == 0 && num% 3==0){
  console.log("your num is divisble")
}
else {
  console.log("your num not is divisble")
}

//make a functions that is EITHER divisble by 2 and 3 and conlsole it
///Q4
let num1 = 8
if (num1 % 2 == 0 || num1% 3==0){
  console.log("your num is divisble")
}
else {
  console.log("your num not is divisble")
}

//Q5
const age3 = 19;
console.log(age3>18? "Drive" : "NotDrive")


let harry = "1"
console.log(harry==1 ? "love" :"hate"  );