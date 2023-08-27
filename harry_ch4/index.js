console.log("harry")

let name = "harry";
console.log(name)
console.log(name.length)


let moonkey = 'kela'
console.log(moonkey)
console.log(moonkey.length)
console.log(moonkey[0])
console.log(moonkey[1])
console.log(moonkey[2])
console.log(moonkey[3])


//////  Tempelate literalssss   backtick ``
                
let boy1 = "ali"   //we can change anyvalue and it is change down there
let boy2 = "atir"//we can change anyvalue and it is change down there
sentence = `${boy1} is a friend of ${boy2}`   // syntax of tempelate litteralsss

console.log(sentence)



//escape sequence character
// this feature use to add extra quote in the word forexample   syntxx =  \'

let game = "hock\'ey"        //use of backslash  = \
console.log(game)            //ans  hock'ey

let fruit = "ban\nana"
console.log(fruit)    //ans ban
                      //    ana                    it van convert word in 2 lines

   let fruit1 = "ban\tana"
   console.log(fruit1)    //ans   ban     ana    (itsmean tab \t = tab)

   let veg = "carrot";
 console.log(veg.length)

 console.log(veg.toUpperCase())   // convert all capitall
 
 console.log(veg.toLowerCase())   // all small
 
 console.log(veg.slice(1,5))     // 1 to 5 sliced out
 console.log(veg.slice(3))     // 1 se aagey 


/////////// to replace 




console.log(veg.replace("car","par"))    // as you carrots initals repets 






// concat
let name1 = "     Ali      "
let name2 = "Atir"

let name3 = name1.concat(name2,)
console.log(name3)
let name4 = name1.concat(" as you can also concat a string as you can see ")
console.log(name4)


///   TRIM

console.log(name1)

console.log(name1.trim())


//strings are immutable

let fr = "usman"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])



//the upper function can be use with forloop
let name6 = "usman"  
for(let i = 0; i<(name6.length);i++){
    console.log(name6[i])
}


//strings are immutable it means every string we change can be right but original remain same



///   ch no 4 practice set


//question 1 if we console the down value what is ans
console.log("harr\"".length)  // ans = 5 this is because harr = 4  + \" = 1     =5

//  q2 use include
let text = "Hello world, welcome to the universe.";
let result = text.includes("worldd");
console.log(result)


"Blue Whale".includes("Blue"); // returns false
"Blue Whale".includes("Blue"); // returns false

// let sentence = "ali run fast"
// let word     = "runs"
//  search      = `"the word "${word} "in" ${sentence.includes("runs")}`



//starts with              
let currency="Dollar is a worldwide"
console.log(currency.startsWith("Dol"))     // true

//endswith
console.log(currency.endsWith("ide"))


//Q3
let stringg = "BEAST"
console.log(stringg.toLowerCase())



//Q4

let strig = "i have rs 1000"
 let amount =strig.slice("i have rs".length)
 console.log(amount)
 console.log(typeof amount)

 let bc =Number.parseInt(amount)
 console.log(typeof bc)
 //this is how a strin number civerted into number


 //q5
 let repl = "shine"
 let b  = "a"
 console.log(repl.replace("n","a"))