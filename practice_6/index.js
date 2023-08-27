
//Q1
let g;
console.log(g);




//Q#2
///create a variable assigin  it a string then assigin it with 
//number then with a boolean and print the final result

let a = "jimmy";
a = 4;
 a =true ;
console.log(a);


//ans jo ayega wo  



//Q 3     
//let d = 5;
//const d = 6;
//console.log(d);   //you cant declare a variable if its already used


//Q4
//let e = 5;
//let e = 5;
//console.log(e)     // you cannot re declare avalue



//Q#5

let f = 'jim'; 
let h = 'kim';
let t = 44;
let y=  77
sum_num= t+y;
console.log(sum_num);
sum_SS = (f+h);
console.log(sum_SS);
sum_NS = (f+t+y);
console.log(sum_NS);


//Q#6

let ab = 'ali';
let bc = 76;
let cd = false;
console.log(bc+ab+cd);
console.log(ab+bc+cd);
console.log(bc+cd+ab);
console.log(bc+ab+cd);
console.log(cd+ab+bc);





//Q#7

let username = "iqra";
let age= 20;

let result = `My name is ${username},I am ${age} years old.`// use of prostics
console.log(result);



//Q8

let gf = false
d_type = typeof(gf);
console.log(d_type);


//Q#9

let arr = [0,1,2,3,4,5,6,7,8,9];
arr.pop();
console.log(arr);

arr.push('Ali334','Umer');
console.log(arr);

console.log(arr.length);

arr.splice(7,1);
console.log(arr);
//delete arr [6]

//Q 10

 const obj = {
 name :'Dani',
 age : 15,

 }
 obj.email = 'abc@gmail.com'
 obj.age = true;

 const objCopy = {...obj};
 delete objCopy['name']
 console.log(obj)
console.log(objCopy)



// //Q#11

// let temp =  '39 degrees';
// if(temp>='40 degrees'){
//     console.log('AC is required');

// }
// else if(temp<='05 degrees'){
//     console.log('heater is required')


// }
// else{
//     console.log('weather seem cool');
// }


// //Q#12
//  let name = 'sami';
//  let age1 = 72;

// console.log(name.toUpperCase());
// function nameAndAge(name, age) {
//   let nameInfo = name.toLowerCase();
//   if (nameInfo[0] === 'a' && age > 15) {
//     console.log('Person name with along with its age');
//   } else if (nameInfo[0] === 'X'  && !age) {
//     console.log('Unknown Data');
//   } else if (nameInfo.length === 10 || age > 0) {
//    console.log('Name contains 10 letters'); 
//   } else {
//     console.log('Data is faulty');
//   }
// }

// nameAndAge(name, age1)



let time = "df"
if (time >= 6 ){
  connsole.log("turn the light on")
}
else if (time<=6 ){
 console.log("turn the light off") 
}
else { 
  console.log("hello")
}




try{
  console.log("hello world")
}catch(error){
  console.log("show error")
}


try {

  shdvjfcdsvjfvsjf
  console.log("try catch")
}
catch(dsf){
  console.log("show error")
}
finally{
  console.log("runnig")
  
  try {
    console.log("hey")
  }
  catch(sd){
    console.log("123")
  }
  finally{
    console.log("finaly")
  }
}


try {
  let promise = new promise((resolve,reject)=>{
  let a = 1+1 
  if (a ==2) {
  resolve("success")
  } else {
    reject("failed")
  }
  })
  
  promise.then ((message)=> {
    console.log("this is in then" + message)
  }) .catch((message) => {
    console.log("this is in catch" + message)
    
  }
  )}
  
  
  catch(error){
    console.log("show error")
  }
  

async function test(){
  await fetch( )

 console.log("B")
 console.log("C")
}
test ();
console.log("D");
console.log("E");
console.log("hello hello")

 


const url ='https://restcountries.com/v3.1/all/';
async function fetchData (){
  const response = await fetch (url);
  const countries = await response.json()
  console.log(countries[56].name.common)
}
fetchData()














