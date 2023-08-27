//////   CH 5         ARRAYSS

const fruits =["apple","banana","orange","grapes","melon"] 
const arr = [5,6,"jahaz",true ]
console.log(arr)   //its mean it can be any of type
console.log(fruits)

//accesing values  in a array

console.log(arr[0]);   // ans 5
console.log(arr[2]);
console.log(arr[1]);///we can access valuesnlike this as in string

// let name = 'string'
// console.log(name[4])            same as array accessing values
//console.log(name.length)


// length can also like an string

console.log(arr.length)   //4
console.log(fruits.length)


let val1 = ["hi","hello","bye"]
val1[1]= 3
console.log(val1)     //[ 'hi', 3, 'bye' ]


// type of array is a type of obj simle

console.log(typeof val1);         // object

//  convert a array to a string

console.log(val1.toString())     //  hi,3,bye


// this how we can join an array

//let val1 = ["hi","hello","bye"]
console.log(val1.join(">"))   //hi>3>bye
console.log(val1.join("_"))  //hi_3_bye
console.log(val1.join("|"))  //hi|3|bye
console.log(val1.join("%"))   //hi%3%bye
console.log(val1.join("   "))  //hi   3   bye

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


//  use of pop

let n = [7 ,"harry", 4, 6, true ,"pop" ,  false]

console.log(n.pop())
console.log(n)


/// this is how to push something in a array
console.log(n.push("hjhsvdcjvsdjvdjs"))   //[ 7, 'harry', 4, 6, true, 'pop', 'hjhsvdcjvsdjvdjs' ]
console.log(n)

//  shift work same as pop but its for first value
console.log(n.shift("324"))   //[ 'harry', 4, 6, true, 'pop', 'hjhsvdcjvsdjvdjs' ]
console.log(n)

//   use of unshift

console.log(n.unshift("apple"))  //[ 'apple', 'harry', 4, 6, true, 'pop', 'hjhsvdcjvsdjvdjs' ]

console.log(n)


//   delete is an operator that is why written as

 let d = [ 43,56,"hello","muskan"]
   delete d[3]
console.log(d)      //[ 43, 56, 'hello', <1 empty item> ]



// use of conacat

let a = [1,2,3,4]
let c = [5,6,7]
let e = [8,9,10]

console.log(a.concat(d))   //[ 1, 2, 3, 4, 43, 56, 'hello', <1 empty item> ]

console.log(a.concat(c,e)) //[ 1, 2, 3, 4,  5,6, 7, 8, 9, 10]




///    sort use       t is how a sort use 
const fruits1 =["apple","banana","orange","grapes","melon"] 
console.log(fruits1.sort())

//// numbers  are arrange alphabatically



//  use of splice

let ar = [ 2,456,44,4,5]
// console.log(ar.splice(2,44))  //[ 44, 2, 5 ]
let b2 = ar.splice(1,2,663,345,453)


console.log(b2)


//use of slice

let   arr1 = [4,2,5,52,4,2]
console.log(arr1.slice(0,3))//[ 4, 2, 5 ]
console.log(arr1.slice(1))   //[ 2, 5, 52, 4, 2 ]


//reverse    this function reverse the element in an array

let num = [1,2,3,4,5,6]
console.log(num.reverse())    // 6, 5, 4, 3, 2, 1 ]    as you see it reverse the value


///\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let num1 = [5,3,73,8,3,67,675]

let compare = (a,b) =>{
    return  b - a
}

num1.sort(compare)
console.log(num1)




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//looping in aarays

//or loop
let array = [2,3,4,5,6]
 for (let i=0; i< array.length; i++){
  console.log(array[i])                    
 }                // 2,3,4,5,6


 //for each loop
//array.forEach(function(currentValue, index, arr), thisValue)
array.forEach((element)=>{
  console.log(element+element)
})                                 //4,6,8,10,12






//array.from()is used to convvert html into arrays

let nam = "harry"
  cb   =Array.from(nam)
console.log(cb)


//  for_of   loop is a short method to get array element better than for_loop

for (let i of array){
  console.log(i)            //2,3,4,5,6
}

// for in give the keys (0,1,2,...)   same as in ibjects in which we get the keys
for (let i in array){
  console.log(i)            //0,1,2,3            
}

for (let i in array){
  console.log(array[i])            ////2,3,4,5,6   as same in for_of         
}


// map
let arr2 = [ 23,4,6,77]
let abc= arr2.map((value, index, array )=>{
  console.log(value,index,array)
  return  
  })
console.log(abc)

// 23     0 [ 23, 4, 6, 77 ]
// 4     1 [ 23, 4, 6, 77 ]
// 6     2 [ 23, 4, 6, 77 ]
// 77    3 [ 23, 4, 6, 77 ]
// [ undefined, undefined, undefined, undefined ]



//filter
let arr3 =  [2,4,64,345,3,6,0]

 let bcd =    arr3.filter((f)=>{
  return f<10
})
console.log(bcd)      ///      [ 2, 4, 3, 6, 0 ]  filter is use to filterout values in a function


//array reduce methode

let arr4 = [1,3,5,6,3]
let newArr =    arr4.reduce((r1,r2)=>{
return r1 +r2
})
console.log(newArr)

// const reduce_func=  (r1,r2)=>{
//   return r1 +r2})           we can put in reduce and use it like a function

////////////////////////////////////////////
////////////////////////////////////////

//   practice    3
//filter for number of array divisible by 10

let arr5 = [ 23,40,10,45,800]

let newarr5= arr5.filter((x)=>{
  return x%10 == 0
})
console.log(newarr5)              //[ 40, 10, 800 ]



// prob 4 create an aray of square of the same given number
let arr6 = [1,2,3,4,5]

let newarr6 = arr6.map((v)=>{
  return v*v
}) 
console.log(newarr6)        //[ 1, 4, 9, 16, 25 ]



// prob 5
// firts natural number ka factorial nkalna hai

let array3 = [1,2,3,4,5,6,7,8,9,10];
let NArr = array3.reduce((v1,v2,)=>{
  return v1*v2
})   
console.log(array3)                     //3628800