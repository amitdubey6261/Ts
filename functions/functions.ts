let hero ; //IN THIS CASE THE TYPE IS SET AS ANY THUS STRICTLY USE TYPESCIPTS COLON SYNTAX
let meraHero: string ;

let fun = () =>{
    return "thor"
}

hero = fun()
meraHero = fun();

console.log(hero)
console.log(meraHero)



//----------------------------->FUNCTIONS<----------------------------


function func1(num: string ){ // if only num is given we are not allowed to pass other value and not will methods such as to_fixed round etc . related to numbers
    return num+"amit" ; 
}

function func2(name: string , classm : string  , enrl: number  ){
    console.log(name , classm , enrl) ; 
}

console.log(func1("mr. "))
console.log(func2("amit singh" , "rathore section " , 20001));


//---------------------------stricting the return type 


// TYPE-1
function flux(s: string): number{
    return 1000 ; 
}


// TYPE-2
const getNewHeros = (s: string): string  =>{
    return "singh is king"
}

//TYPE-3
// function getValue( s: string , m: string ): boolean{
//     if(s.length != 6) return "10" ; 
//     else return 100
// }
//------This case is union type we will handle it later

//Type-4 

const array = ["amit" , "ankit" , "dubey"]

array.map((val : string): string=>{
    return `relatives is ${val}`
})

function newfunx(val : string): void{
    console.log("amit")

}

//use it when we strictly want to share that returntype must be null








