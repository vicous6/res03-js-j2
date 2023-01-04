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
 
    
    console.log(first+ope+second)
}


calculator()


