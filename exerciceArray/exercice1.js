// Exercice 1

let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];
for(let animal of animals){
    
   console.log(animal) 
}
// Exercice 2
let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];
console.log("exercice 2")
for (let i = 0; i< animals_even.length; i ++){
    
    if(i%2 ==0){
        console.log(animals_even[i] +" pair")
    }
}

for (let i = 0; i< animals_odd.length; i ++){
    
    if(i%2 != 0){
        console.log(animals_odd[i] + " impair")
    }
}

// Exercice 3
let numbers = [10, 11, 15, 6];
let sum = 0

for( let i =0 ; i< numbers.length; i ++){
    
    sum += numbers[i]
}
console.log(sum)


// Exercice 4
let grades = [[20, 10], [15, 20], [13, 18]];
let somme = 0
let count = 0
for (let i =0 ; i < grades.length; i++ ){
    
    for (let j =0 ; j <  grades[i].length;j++){
        
        count++
        somme += grades[i][j]
    }
}

console.log( somme/count)

// exercice bonus
let numberss = [-23,42,21,90,54,362,-12,57,78,84,35,546,128,7,15,65,28];

let res = []

for (let i = 0 ; i < numberss.length; i ++){
    
    let currNumber = -10000000; 
    
    
    for (let j = 0 ; j <numberss.length; j ++){
        
       
        
        if(numberss[j] > currNumber && i===0 ){
            
            
            currNumber= numberss[j];
            console.log("current number = "+ currNumber);
        }else if (j === numberss.length -1){
            
            res.push(currNumber);
        }
        
        if(numberss[j] > currNumber && i>=0 && numberss[j]< res[res.length-1] ){
            
            
            currNumber= numberss[j];
            console.log("current number = "+ currNumber);
        }
     
        
        
    }
    
    
    
}
res.pop()
console.log(res)

// exercice bonus2

let truc = 0;

while(truc <1 || truc >10000){ 
    
    truc = window.prompt("choisissez un nombre entre 1 et 10 000")
    
    
}
let ress ;
for(let i = 1 ; i< 10000; i++){
   
    if(i == truc ){
        ress= i
        console.log(" nombre d'essaies"+ i)
    }
}
console.log("res = "+ress )


