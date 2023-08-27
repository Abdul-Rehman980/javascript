//Q#1
//WRITE AN ASYNCH FUNCTION TO CALL AND API AND RESPONSE//
 let urlApi= 'https://reqres.in/api/users?page=1';
const fetchApiData = async (url) => {
 let res  = await fetch(url);
   res = await res.json();
   console.log(res);
};
 fetchApiData(urlApi);

 //Q#2
 //

const multiFetchApi = async(urlarr)=>{
  const resArr = urlarr.map(async(url)=> (await fetch (url)).json());
 return Promise.all(resArr);
};
let arr=[
'https://reqres.in/api/users?page=1',
'https://reqres.in/api/users?page=2',
'https://reqres.in/api/users?page=3'

];
console.log(multiFetchApi(arr));