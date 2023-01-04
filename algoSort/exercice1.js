// // Exercice 1

// let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];
// for(let animal of animals){

//   console.log(animal) 
// }
// // Exercice 2
// let animals_even = ["Dog", "Cat", "Spider"];
// let animals_odd = ["Bat", "Snake", "Bear"];
// console.log("exercice 2")
// for (let i = 0; i< animals_even.length; i ++){

//     if(i%2 ==0){
//         console.log(animals_even[i] +" pair")
//     }
// }

// for (let i = 0; i< animals_odd.length; i ++){

//     if(i%2 != 0){
//         console.log(animals_odd[i] + " impair")
//     }
// }

// // Exercice 3
// let numbers = [10, 11, 15, 6];
// let sum = 0

// for( let i =0 ; i< numbers.length; i ++){

//     sum += numbers[i]
// }
// console.log(sum)


// // Exercice 4
// let grades = [[20, 10], [15, 20], [13, 18]];
// let somme = 0
// let count = 0
// for (let i =0 ; i < grades.length; i++ ){

//     for (let j =0 ; j <  grades[i].length;j++){

//         count++
//         somme += grades[i][j]
//     }
// }

// console.log( somme/count)
var start = new Date();
// CODE


// debut algo 1
// exercice bonus
let numberss = [-23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28];

let res = []

for (let i = 0; i < numberss.length; i++) {

    let currNumber = -10000000;


    for (let j = 0; j < numberss.length; j++) {



        if (numberss[j] > currNumber && i === 0) {


            currNumber = numberss[j];
            console.log("current number = " + currNumber);
        }
        else if (j === numberss.length - 1) {

            res.push(currNumber);
        }

        if (numberss[j] > currNumber && i >= 0 && numberss[j] < res[res.length - 1]) {


            currNumber = numberss[j];
            console.log("current number = " + currNumber);
        }



    }



}
res.pop()
console.log(res)
   
// debut algo 2


var start = new Date();
let numb = [-448,
    -457,
    180, -217,
    160, -317, -287,
    349,
    202,
    285, -489,
    302,
    271, -476, -355,
    337, -14,
    88, -201, -260, -1,
    469, -157,
    266,
    315, -403,
    441, -125,
    114, -92, -464, -472, -88, -164,
    126,
    408,
    432, -157,
    9, -347,
    81, -399, -192, -33, -56,
    93, -20,
    429, -9, -327,
    79,
    361,
    250,
    8, -116, -23,
    14,
    487,
    33, -467, -35,
    319, -98, -411, -499,
    113, -144,
    366, -192, -84,
    490,
    72,
    178,
    325,
    299,
    76,
    103,
    148, -487,
    469,
    411, -422, -324, -347, -210, -68, -482,
    177,
    13, -26, 5,
373,
408, -426,
49,
440, -123, -399,
427,
415,
281, -35, -120,
14,
5, -213,
141, -397, -385, -414, -127,
468,
221, -340, -71,
184, -96,
247,
263, -64, -48, -259, -119, -278,
31,
436, -89, -126, -174, -208, -490, -79, -248,
175,
314,
268,
88,
36,
490, -101]



function sort(array) {


    for (let i = 0; i < array.length; i++) {

        
      for(let j= 0; j< array.length;j ++){
          
            let current = array[j];
        let next = array[j + 1];


        if (current > next) {

            array[j] = next;
            array[j + 1] = current;
  console.log(i);

            j = 0;
            // console.log(array)
          
        }
      }


    }
    console.log(array);
}

sort(numb);
var time = new Date() - start;
console.log(new Date() - start)
