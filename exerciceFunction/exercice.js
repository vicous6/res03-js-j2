function add(a,b){


    return a+b
}

function sub(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

function div(a,b){
    return a/b
}

function mod(a,b){

    return a%b

}
console.log(add(1,2))
console.log(sub(1,2))
console.log(mult(1,2))
console.log(div(1,2))
console.log(mod(2,4))



function askUserOperation(){

    let truc1 ="" ;
    while(truc1 != "+" && truc1 != "-" && truc1 != "*" && truc1 != "/" ){

        truc1 = window.prompt("choisissez un type de calcul")
    }
    return truc1
}

function askUserFirstNumber(){
    let truc2;

     while(truc2 == undefined){

        truc2 = window.prompt("Choisissez le premier nombre")
    }
    return truc2
}


function askUserSecondNumber(){
    let truc3;
     while(truc3 == undefined){

        truc3 = window.prompt("Choisissez le deuxième nombre")
    }
    return truc3
}


function calculator(){

 let ope=   askUserOperation();
 let first=   parseInt( askUserFirstNumber());
  let second= parseInt( askUserSecondNumber());


   if(ope === "+"){
       
    console.log(  add(first,second))
   }else
   if (ope == "-"){
      console.log(  sub(first,second)  ) 
   }
   else
   if (ope == "*"){
    console.log(    mult(first,second)  ) 
   }
   else
   if (ope == "/"){
     console.log(   div(first,second)   )
   }else
   if (ope == "%"){
      console.log(  mod(first,second)   )
   }
}


calculator()




// exercice arrayshuffle pour anton 

// let machin = ["czer", "efz", "123", "258"]

// function shuffle(arr) {

// let result = []


//     let shuffleArray = []

//     for (let i = 0; i < arr.length; i++) {

//         let num = getRandomInt(arr.length)



//         while (shuffleArray.includes(num) == true) {

//             num = getRandomInt(arr.length )
//         }
//         shuffleArray.push(num)
        
//         for(let i = 0; i< arr.length; i++){
            
//           result[i]=arr[shuffleArray[i]]
//         }
//     }
//     return result
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }


// console.log(shuffle(machin))
