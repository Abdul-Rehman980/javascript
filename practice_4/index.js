console.log("Helloworld")
let name = '5454';
console.log(name)



//const usersdata = [
    
//{
//user_name : "rishta',
//password  : '12345',

//}
//]


// function multiply (a,b,c){
//     return (a*b*c)
// }
// multiply();
// console.log(multiply(2,3,4));
 


// let arr = [1,2,"a","b"];
// function sub_Arr_element (arr) {
//     return (arr.pop)
// }

// arr = [1,2,"a","b"];
// function subtraction(arr){ 
//     let result=0; 
//     arr.forEach((value)=>{ 
//         result-=value; 
//     }) 
// } 


const myObject = {
    prop1: 'Hello',
    prop2: 'World',
  
    // Function inside the object
    func1: function() {
      console.log(this.prop1 + ' ' + this.prop2);
    },
  
    // Another function inside the object calling func1
    func2: function() {
      console.log('Calling func1 from func2:');
      this.func1(); // Calling func1 using 'this'
    }
  };
  
  // Call func1
  myObject.func1(); // Output: "Hello World"
  
  // Call func2 which calls func1
  myObject.func2(); // Output: "Calling func1 from func2:", "Hello World"



  const friends ={
    friend1 : "chota",
    friend2 : "honey",
    friend3 : "subhan",
    friendsage : [21,22,23],
    }
    
    
    console.log(friends.friend1);
    console.log(friends);




    function formatNumber(num) {
        return num.toFixed(2);
      }
      
      formatNumber(2);





