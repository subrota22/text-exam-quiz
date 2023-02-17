
const onion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
onion.filter(numberFilter => numberFilter >= 10 ? console.log(numberFilter) : undefined);

const nameOfFriend = [
    { name: "Subrota", age: 22 },
    { name: "Sorna", age: 21 },
    { name: "Subrota", age: 19 },
    { name: "Navila", age: 23 },
    { name: "Subrota", age: 20 },
];
let matchedName = ["Matched friends => "];
nameOfFriend.filter(friendName => friendName.name === "Subrota" ? matchedName.push(friendName.name) : undefined);
console.log(...matchedName, ",");


// >>----->>------->>  |   some   | <<------<<--------<<


let string = ["since" , "since" , "dog"  ,"dog" , "look" , "look" , 1 ,1 ,2,8,8,20 , 2 , 3 , 3 ] ;
string.sort((a,b) => a-b) ;
//
function stringRecive(string) {
let newString =  string.filter((item,index) => string.indexOf(item) === index);
return newString ;
}
stringRecive(string) ;

//>>------->>  |   mongo  | <<--------<<



console.log(stringRecive(string));

let arr = ["scale", "happy", "strength",
"peace", "happy", "happy", "sad", "sad"];

function removeDuplicates12(arr) {
return arr.filter((item,index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates12(arr));



// let arr = ["scale", "happy", "strength",
// "peace", "happy", "happy"];

// function removeDuplicates(arr) {
// return arr.filter((item,index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));