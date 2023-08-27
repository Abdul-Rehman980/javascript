
//Q#1
function func(){
setTimeout(()=>console.log('helloworld'),2000)
}
func();

//Q#2





//Q3
const multiply=(a,b)=>{
    return a*b;
};
const handleResult=(x,y,callback) =>{
    let res=callback(x,y);
    setTimeout(()=>console.log(res),1000)

};
handleResult(5,5,multiply);

//Q4
