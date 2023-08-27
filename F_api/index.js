// // const bucket = ["coffe", "chips","vegetable","rice"];
// // const friedRicePromise =  new Promise ((resolve,reject)=>{
// //   if (bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
// //    resolve( "friedrice");
// // } else {
// //   reject ("could not do it");
// // }
// // })

// // //consume a promise
// // // executor operator ???
// // friedRicePromise.then((hresolev)=>{
// //   console.log(hresolev)
// // },
// // (a)=>{
// //   console.log(a)
// // } 

// // produce a promise 

// const bucket = ["coffe", "chips","vegetable","rice"];
// const friedRicePromise =  new Promise ((resolve,reject)=>{
//   if (bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
//    resolve( {vale :"friedrice"});
// } else {
//   reject ({"could not do it cauz something missing" : 1});
// }
// })

// //consume a promise
// // executor operator ???
// friedRicePromise.then((myriced)=>{
//   console.log("lets eat",myriced )
// },
// (a)=>{
//   console.log(a)
// } 

// )








//callbacks


// function myfunc (CALLBACK){
//     console.log("function is doing task 1")
//  CALLBACK();
// }


// // myfunc(()=>{
// //     console.log("function is dooing task 2")
// // })

// // function  myfunc2(){
// //     console.log("function is doing task 2")

// // }

// myfunc( ()=>{
//     console.log("function is doing task 2")
// })  



///   BASIC EXAMPLES OF CALLBACK FUNCTION

// function get2num(numb1 ,numb2,) {
//     console.log(numb1,numb2);
// }

// function sum2num(num1, num2){
//     console.log(num1 + num2);
// }
// get2num(4,3);
// sum2num(4,3)

///some more


function get2num_and_Add (numb1 ,numb2,onsuccess,onfailure) {
    console.log(numb1,numb2);
if (typeof numb1==="number" && typeof numb2 === "number"){
   onsuccess(numb1,numb2)}    // callback1(numb1,numb2)} 
else {
 onfailure ();
}
}
// function sum2num(num1, num2){
//     console.log(num1 + num2);
// }
// function les_2_num(n1,n2){
// console.log(n1*n2)
// }
get2num_and_Add(5,"4", (num1,num2)=>{
    console.log(num1 + num2)
}
,()=>{
    console.log("error")
    console.log("enter correct data type")
}
)

// sum2num(4,3)















