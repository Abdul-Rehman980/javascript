// // setTimeout(()=>{
// // console.log("one")
// // console.log("HELLO1")
// // setTimeout(()=>{
// //     console.log("two")
// //     console.log("HELLO2")
// //     setTimeout(()=>{
// //         console.log("three")
// //         console.log("HELLO3")
// //         setTimeout(()=>{
// //             console.log("four")
// //             console.log("HELLO4")
// //             setTimeout(()=>{
// //                 console.log("five")
// //                 console.log("HELLO5")
// //                 setTimeout(()=>{
// //                     console.log("six")
// //                     console.log("HELLO6")
// //                     setTimeout(()=>{
// //                         console.log("seven")
// //                         console.log("HELLO7")
// //                         setTimeout(()=>{
// //                             console.log("eight")
// //                             console.log("HELLO8")
// //                             setTimeout(()=>{
// //                                 console.log("nine")
// //                                 console.log("HELLO9")
// //                                 },1000)
// //                             },1000)
// //                         },1000)
// //                     },1000)
// //                 },1000)
// //             },1000)
// //         },1000)
// //     },1000)
// // },1000)




// const bucket = ["coffe", "chips","vegetable","salts","rice"];
// const friedRicePromise =  new Promise ((resolve,reject)=>{
//   if (bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
//    resolve( "friedrice");
// } else {
//   reject ("could not do it");
// }
// })

// //consume a promise
// friedRicePromise.then((a)=>{console.log(a)}
// )
// .catch((a)=>{console.log(a)}
 
// )

// //  function mypromise()
// //   promise((resolve,reject)=>{
// //     const value= true;
// //     setTimeout(()=>{
// //         if (value){
// //             resolve ()
// //         } else { reject()}
// //     },2000)
// //  })


// //  mypromise.then(()=>{console.log(resolved)})
// // //  .catch(()=>{console.log(reject)})


// async function logMovies() {
//     const response = await fetch('https://restcountries.com/v3.1/all/');
//     const movies = await response.json();
//     console.log(movies);
//   }



// logMovies.then((a)=>{console.log(a)
// })
// .catch((a)=>{console.log(a)})





// const url =('https://reqres.in/api/users?page=5');
// async function fetchData (){
//   const response = await fetch (url);
//   const countries = await response.json()
//   console.log(countries[56].name.common)
// }
// fetchData()






// async function apidata() {
//     const response = await fetch('https://reqres.in/api/users?page=5');
//     const data = await response.json();
//     console.log(data);
//   }


// fetch('https://reqres.in/api/users?page=1')






// const numbers = [4,2,5,8];


// for ( let i = 0 ; i<numbers.length; i++){
//     console.log(numbers[i])
// }

// numbers.forEach((Element,numbers)=>{
//     console.log(Element*numbers)
// })



// let name =  "harry"
// let arr = Array.from(name)
// console.log(arr)
// console.log(arr)

// for (let i of numbers){
//     console.log(i)
// }

// for (let i in numbers){
//     console.log(numbers[i])
// }  

//let ar = [2,3,1,4];
// let cr =  ar.map((value,index,Array)=>{
//  return (value*value, value +index)
// })
// console.log(cr)
// let gr = ar.map ((values, index, Array)=>{ 
//     console.log(values,index,Array)
//     return (values +index,values +1,values +Array ) })
// console.log(gr)



///      ARRAY FILTER

// let arr = [32,53,6,3,12,43,5,6,45,]
// let arr1= arr.filter((a)=>{
//     return (a<10)
// })
// console.log(arr1) 
// let arr2 = [2,4,6,5,3];
// let arr3 = arr2.reduce((r1,r2)=>{
//        return (r1+r2)
// })
// console.log(arr3,arr2)
// let c =  arr.includes(32)
// console.log(c)


// const url ='https://restcountries.com/v3.1/all/';
// async function fetchData (){
//   const response = await fetch (url);
//   const countries = await response.json()
//   console.log(countries)
// }
// fetchData()

// //function to search curriencies
// const searchFunction = (data, searchValue) => {
//     searchValue = searchValue;
//     if (searchValue !== '') {
//       return data.filter((item) => item.name.capital.includes(searchValue))
//                  .map((item) => item.name.capital);
//     } else {
//       return data;
//     }
//   };












// const main = async () => {
//   try {
//     // Fetch data from the API
//     const apiUrl = 'https://restcountries.com/v3.1/all';
//     const apiData = await fetchDataFromAPI(apiUrl);

//     // Read data from the input file
//     const inputData = await fs.readFile('input.txt', { encoding: 'utf8' });
//     const inputValues = inputData.split(',');

//     // Apply search function on the 1st input
//     const searchResult = searchFunction(apiData, inputValues[0]);
//     console.log('Search Result:', searchResult);

//     // Filter the data based on the 2nd input
//     const filteredData = filterData(apiData, inputValues[1]);
//     console.log('Filtered Data:', filteredData);

//     // Return only the key for the 3rd input
//     const keyResult = returnKeys(apiData, inputValues[2]);
//     console.log('Key Result:', keyResult);

//     // Limit the resultant array at the 4th input
//     const limitValue = parseInt(inputValues[3].trim());
//     const limitedData = limitData(apiData, limitValue);
//     console.log('Limited Data:', limitedData);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// };

// main();










// async function fetch_Data(apiUrl) {
//   try {
//     const response = await fetch(apiUrl); // Make the API request and wait for the response
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const data = await response.json(); // Parse the response body as JSON and wait for it
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Re-throw the error to be handled by the caller
//   }
// }

// // Example usage
// (async () => {
//   const apiUrl = 'https://restcountries.com/v3.1/all'; // Replace with your API endpoint
//   try {
//     const result = await fetch_Data(apiUrl); // Fetch data using the defined function
//     console.log('Fetched data:', result);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();

//let url = 'https://restcountries.com/v3.1/all'
async function  fetchapiData(url){
  
    const response = await fetch (url)
    const data = response.json()    
    return data

  
}
fetchapiData('https://restcountries.com/v3.1/all')