console.log("hellloWorld")

// for loop

for (let i=9; i>1; i--){
    console.log(i)
}


for (let i=0; i<19; i++){
    console.log(i)
};


// let sum = 0;
// let n = prompt ("hello");
// n = Number.parseInt(n);
// for (let i = 0; i<n; i++){
//     console.log(i +1)
// };


let obj = {
    rah : 30,
    hal : 40,
    me : 56
};

// for (let a in obj){
//     console.log(a)
// };                            //  rah hal me (refers prints as you see)

for (let a in obj){
    console.log("marks of  " + a + " are " + obj[a])
}



//for of loop
for (let b of "Abdul"){
    console.log(b)
}                    //use this loop for array   and   strings




//FUNCTIONS




function oneplusaverage(x,y){
    console.log("Done")
    return 1+(x+y)/2;
}
    let a = 1
let b = 2
let c =3

console.log("one plus average of " ,oneplusaverage(a,b))
console.log("one plus average of " ,oneplusaverage(b,c))
console.log("one plus average of " ,oneplusaverage(a,c))



function oneminusavg(x,y){
    console.log("Done")
    return 1-(x+y)/2;
}


console.log("one plus average of " ,oneminusavg(a,b))
console.log("one plus average of " ,oneplusaverage(b,c))
console.log("one plus average of " ,oneplusaverage(a,c))



////  ARRROW FUNCTION   
const sum=(p,q)=>{
    return p+q
}

console.log(sum(9,7))    //    16



const hello = ()=>{
    console.log("bye bye")
} 

hello();  //this is the simple way to console.arrow function

let v = hello     
console.log(v)


// ch 3 Practice

//problem 1
let marks = {
    harry : 100,
    mine : 6,
    abdul : 66,
    atir : 78,

}
for (let i = 0 ; i<Object.keys(marks).length;i++){
    console.log(" the marks of " + Object.keys(marks)[i] + "  are   " + marks[Object.keys(marks)[i]] )
}
//write same with for in loop



for (let key in marks){

    console.log(" the marks of " + key + "  are   " + marks[key] )
}                                     //same task done with it so ease than for Loop




// probl 4             get the mean of 4 numbers
const meann = (a,b,c,d) =>{

    return(a+b+c+d)/4
}

console.log(meann(5,6,3,5))