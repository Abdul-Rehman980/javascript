let myName =  'Ali';

//checking Variable type
const typeName = typeof(myName);
console.log(typeof myName);

console.log(typeName, myName);


let Num = 4;

const typeName2 = typeof(Num);

console.log(typeof Num );

console.log(Num, typeName2 );

myName3 = 5;

const typeName3 = typeof (myName3);


console.log(typeName3);

console.log (typeof myName3);




//Boolean Typpe//


let lightstatus = false;
let lcdstatus = true;

console.log(lightstatus);
console.log(lcdstatus);

const typestatus = typeof (lcdstatus);

console.log(typestatus);
console.log(typeof(lcdstatus));


//ARRAY//////////////////


const arrayOfNumbers = [1,2,3,4,5];
console.log(arrayOfNumbers);

console.log(arrayOfNumbers[3]);
console.log(arrayOfNumbers[0]);
console.log(arrayOfNumbers[4]);

const LofArray = arrayOfNumbers.length;
console.log(LofArray);
console.log(arrayOfNumbers.length);

console.log(LofArray-1);

console.log(arrayOfNumbers.length-2);

/////////   manipulation In Array/////////////


const numbersArray = [1,2,3,4,5];

//adding Value in Array


console.log(numbersArray);

numbersArray.push(56);

console.log(numbersArray);
console.log(numbersArray.length);
console.log(numbersArray.length);




console.log(numbersArray);
console.log(numbersArray.length);
console.log(numbersArray.length);





numbersArray.push(22,35,35,3,5);



numbersArray.pop(3,4,5,6);
console.log(numbersArray);


numbersArray.push(22,'danishAliusama5',3,5);

console.log(numbersArray);

//numbersArray.pop(5);
//console.log(numbersArray);

numbersArray.pop('danishAliusama5');

console.log(numbersArray);


const arrayofeverything = [
    5,
    "Usaman",
    'age_34',
    true,
    [4,5,6,7]
];

console.log(arrayofeverything);
console.log(arrayofeverything.length);

const arrayofeverythingLength = arrayofeverything.length;
console.log(arrayofeverythingLength-(1));

console.log(arrayofeverything.length-(2));

arrayofeverything.push(444);
console.log(arrayofeverything);

arrayofeverything.push('ggg',[1,23,3,4,5,56]);

console.log(arrayofeverything);


arrayofeverything.pop(2,3,4,5);
console.log(arrayofeverything);


TOarray = typeof (arrayofeverything);
console.log(TOarray);

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let size = fruits.length;

/*
console.log(fruits.length);

fruits.toString();
console.log(fruits);


fruits.pop(1);
console.log(fruits.pop(1));


fruits.pop(1);
console.log(fruits.pop(1));


fruits.pop(3);

console.log(fruits.pop(3));
*/



const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log(fruits);
console.log(size);
fruits.push('3');
console.log(fruits);
console.log(size);
fruits.push('3');
console.log(size);

fruits.pop();
console.log(fruits);


fruits.pop();
console.log(fruits);


fruits.pop();
console.log(fruits);

fruits.push("23534534436");
console.log(fruits);

fruits.length-(3);

console.log(fruits);

fruits.length-(3);

console.log(fruits.length-(3));

console.log(fruits);


fruits.pop();

console.log(fruits);

fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);
console.log(fruits);

fruits.push(5467);
fruits.push(767);

console.log(fruits);

//everything in js is an OBJECT




const first_object = {
    name: "umer",
    rollnumber : 1,
    attendance: true,

};

console.log(first_object);

const T_firstobject = typeof (first_object);
console.log(T_firstobject);
console.log(typeof (first_object));

//console.log(t_object[name]);


//const person = new Object();
//person.firstName = "John";
//person.lastName = "Doe";
//person.age = 50;
//person.eyeColor = "blue";



//console.log(person);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  console.log(person);




  const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  

  console.log(person1);


  console.log('person1');

const friends ={
friend1 : "chota",
friend2 : "honey",
friend3 : "subhan",
friendsage : [21,22,23],
}


console.log(friends.friend1);
console.log(friends);




function sum(x,y){

console.log("done")
console.log("[8,6,4]")
  return 1+(x+y)
}



let a = 1;
let b =2;
let c=3;


sum();
console.log(sum(5,8));




const avgval = (p,q) => { return  (p+q)/2  }




console.log(avgval(6,8))

//console.log("sum of values" ,1+(a +b));
//console.log("sum of values" ,1+(a +c));
//console.log("sum of values" ,1+(c +b));


