// // console.log('helloworld');



// ///ASSESMENT 5 16/7/2023  
// /*
// Question No 1
// What is call back function?

// ANSWER: A CALLBACK FUNCTION IS A FUNCTION THAT TAKES 

// Question  No 2

// ANSWER: 
// 1)  SetInterval()
// 2)  SetTimeout()

// */

// // Q 3) If you call an async function inside a console.log. and the async function has no await 
// // statement in it.What would be the result of this console.log and vice versa?

// // const fetchApiData = async () => {
// //     const res = fetch('https://reqres.in/api/users?page=5');
// //     return res ;

// //    };
// //       console.log(fetchApiData());     //Promise { <pending> }






      

// / classroom aSSIngment     15/7/2023   saturday

// //Q#1
// //WRITE AN ASYNCH FUNCTION TO CALL AND API AND RESPONSE//
// let urlApi= 'https://reqres.in/api/users?page=1';
// const fetchApiData = async (url) => {
//  let res  = await fetch(url);
//    res = await res.json();
//    console.log(res);
// };
// // //  fetchApiData(urlApi);

// //  //Q#2
// //  //

// // const multiFetchApi = async(urlarr)=>{
// //   const resArr = urlarr.map(async(url)=> (await fetch (url)).json());
// //  return Promise.all(resArr);
// // };
// // let arr=[
// // 'https://reqres.in/api/users?page=1',
// // 'https://reqres.in/api/users?page=2',
// // 'https://reqres.in/api/users?page=3'

// // ];
// // console.log(multiFetchApi(arr));


// //

// // for (let i=0; i<501; i++){
// //   console.log(i)
// // };



// // for (let i = 50 ; i<55; i++)
// // [
// //   console.log(i)
// // ]




// // https://en.wikipedia.org/wiki/List_of_circulating_currencies

// // try{
//   // fetch('https://www.nationsonline.org/oneworld/currencies.htm')
//   // .then (response => response.json())
// // .then(jsonData=> console.log(jsonData))
// // async function data(){
//   //   let responce = await fetch('https://www.nationsonline.org/oneworld/currencies.htm')
//   //   return responce.json();
//   // }}
//   // catch(){
//     //   console.log('show an ')
// // }



// // fetch('https://reqres.in/api/users?page=1')
// // .then (response => response.json())
// // .then(jsonData=> console.log(jsonData))
// // async function data(){
// //   let responce = await fetch('https://reqres.in/api/users?page=1')
// //   return responce.json();
// // }

// // const url =
// // 'https://restcountries.com/v3.1/all/';
// // async function fetchData (){
// //   const response = await fetch (url);
// //   const countries = await response.json()
// //   console.log(countries[56].name.common)
// // }
// // fetchData()


// function hello (a,b,c,d){
// return (a+b-c*d)
// } 
// console.log(hello (1,3,4,5))

// function iseven (num){
// if (num%2 ===0){
// return true;
// }else{
//  return false; 
// }
// }
//  console.log(iseven(4));

// //  let c =  'anystring'
// //  function fstap() {
// //   return fstap[0];
// //  }

// //  console.log(anystring('c'))

// function adding (x,y,z){
//   return (x+y+z)
// }

// console.log(adding(3,4,5))



// let x;
// function TF(x){
//   return x%2===0;
// }
// console.log(TF(2))


// console.log(num1)

// function apple(vx) {
// return vx % 2===1 ; 
// }

// console.log(apple(6))



// let num2 = 9;
// let i =0;

// while (i<=8) {
//   num2 = num2 + i
//   i++
// }

// console.log(i)


// i = 0;
// num1 = 9;
// while(i<=10){
//  num1 = num1 + i
//   i++
// }
// console.log(i)


// let i = 0;
// num3 = 10;
// total = 0;
// while(i<=5){
//   total = total+ i;
//   i++;
// }
// console.log(total)




// while (i<=10){
//   i++;
// }

// console.log(i)




// let i = 0;
// num = 10
// total = 0

// for (;  i<=num; i++){
//   total = total + i;
  
// }
// console.log(total)



///    break and continue           

// for (let i=0; i<=4 ; i++){
  
//   if (i=== 2){
//     break ;
//   }
//   console.log(i)
// }

// let i=0
// for (; i<=4 ; i++){

//   if (i=== 2){
//     continue ;
//   }
//   console.log(i)
// }

// let i = 0
// while (i<=10){
//   i++;
// }

// console.log(i)        //11


// let j = 12
// // while (j<=10){
// //   j++;
// //   console.log(j)  
// // }   // nothing is print as j > 10


// do {
//   console.log(j) 
//   j++;
// } while (j<=10)

// console.log('the value of at that time',j)


// let fruits = [ 'apple','mangoes','grapes']
// console.log(fruits)
// console.log(fruits[1 ])
// console.log(typeof (fruits))
// console.log(Array.isArray(fruits))
// obj ={}
// console.log(Array.isArray(obj))


// // let fruits = [ 'apple','mangoes','grapes']

// fruits.push('kiwi')
// console.log(fruits) 


// console.log(fruits.shift()) 



// //primitive type
// num1 = 5
// num2 = num1
// console.log(num1)
// console.log(num2)
// num1++;

// console.log(num1)
// console.log(num2)


// // refernc type
// let arr1 = [ 1,2,3]
// let arr2 = arr1
// console.log(arr1)
// console.log(arr2)

// arr1.push("array is refer type that is why val of arr2 remain same")
// console.log(arr1)
// console.log(arr2)


// const bucket = ["coffe", "chips","vegetable","rice"];
// const friedRicePromise =  new Promise ((resolve,reject)=>{
//   if (bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
//    resolve( "friedrice");
// } else {
//   reject ("could not do it");
// }
// })

// //consume a promise
// // executor operator ???
// friedRicePromise.then((hresolev)=>{
//   console.log(hresolev)
// },
// (a)=>{
//   console.log(a)
// } 

// produce a promise 

const bucket = ["coffe", "chips","vegetable","rice"];
const friedRicePromise =  new Promise ((resolve,reject)=>{
  if (bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
   resolve( {vale :"friedrice"});
} else {
  reject ({"could not do it cauz something missing" : 1});
}
})

//consume a promise
// executor operator ???
friedRicePromise.then((myriced)=>{
  console.log("lets eat",myriced )
},
(a)=>{
  console.log(a)
} 

)