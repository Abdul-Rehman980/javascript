// // //////////////////////////   VIDEO 46

// // // SET TIMEOUT

// // // setTimeout (function(){
// // //     alert ("i am inside set time out")
// // // }, 2000 )
// // setTimeout(() => {
// //     console.log("Delayed for 3 second.");
// //   }, 3000);

// //  const time=   setTimeout(() => {
// //     console.log("i will learn web")
// // }, 5000);


// // setTimeout(() => {
// //     console.log("this is love")
// //     //console.log(time)
// // }, 6000);



// // setTimeout(()=>{
// //     console.log(" 8 seconds message")
// // },8000)


// // const sum = (a,b) => {
// //     console.log("bhag rahim bhag" ,3+4 )
    
// // }
// // setTimeout(sum, 4000 , 2,3)


// // const sub = ((x,y,z)=>{
// //     console.log("my name is Beast" ,x - y+z  )
// // })
// // setTimeout(sub,2000,6,6 ,6)



// // const div = ((e,f)=>{
// //     console.log("Hello   ", e/f)
// // })
// // setTimeout(div , 1000 , 9,3)

// //  clearTimeout(div)

// // let v =setInterval(() => {
// //     console.log("hello")
  
// // }, 3000)


// // clearInterval(v  )


// // const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// // function myCallback(a, b) {
// //   // Your code here
// //   // Parameters are purely optional.
// //   console.log(a);
// //   console.log(b);
// // }

// // clearInterval(intervalID)









// // async function apidata() {
// //     const response = await fetch('https://reqres.in/api/users?page=5');
// //     const data = await response.json();
// //     console.log(data);
// //   }
// // fetchData()


// // const url =
// // 'https://restcountries.com/v3.1/all/';
// // async function fetchData (){
// //   const response = await fetch (url);
// //   const countries = await response.json()
// //   console.log(countries)
// // }
// // fetchData()



// const fs = require('fs/promises');

// const fetchDataFromAPI = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     return null;
//   }
// };

// const searchFunction = (data, searchValue) => {
//   searchValue = searchValue;
//   if (searchValue !== '') {
//     return data.filter((item) => item.name.capital.includes(searchValue))
//                .map((item) => item.name.capital);
//   } else {
//     return data;
//   }
// };

// const filterData = (data, filterValue) => {
//   filterValue = filterValue;
//   return data.filter((item) => item.altSpellings.some((spelling) => spelling === filterValue));
// };

// const returnKeys = (data, key) => {
//   return data.map((item) => item[key]);
// };

// const limitData = (data, limitValue) => {
//   if (!limitValue || isNaN(limitValue) || limitValue <= 0) {
//     return data;
//   } else {
//     return data.slice(0, limitValue);
//   }
// };

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


async function  fetchapiData(url){
  
  const response = await fetch (url)
  const data = response.json()    
  return data


}
fetchapiData('https://restcountries.com/v3.1/all')