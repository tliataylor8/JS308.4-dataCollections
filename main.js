// 9-25-2024

//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

// 1 * 9 
// 2 * 9
// 3 * 9

//Pseudo Code
// start at 0, end at 10
// for loop
// starting point
// condition
// incrementor/decrementor => move this forward
// code block/ statement

// for (let i = 0; i <= 10; i++){
//   console.log(i * 9)
// }
// for (let i = 0; i <= 90; i += 9){
//   console.log(i)
// }

// for (let i = 0; i <= 10; i++){
//   let result = i * 9;
//   console.log(result);
// }

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
// let i = 5
// while (i <= 50) {
//   console.log(i)
//   i += 5;
// }

// Variable.methodA().methodB();

// Array Methods

// concat()
// 
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT'];
// let myFavBandsArtists = ['The National', 'Arcade Fire', 'Mastodon', 'Porter', 'Zoe'];

// let ourFavBandsArtists = yourFavBandsArtists.concat(myFavBandsArtists);
// // the two arrays get combined into one, and create a new array called 
// // ourFavBandsArtists 
// console.log(ourFavBandsArtists);

// let secondFavlist = yourFavBandsArtists.concat(myFavBandsArtists, myFavBandsArtists, myFavBandsArtists)
// console.log(secondFavlist)

// Spread Operator
// spread operators: elements are "spread" w/in an array literal
// ES6
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT'];
// let myFavBandsArtists = ['The National', 'Arcade Fire', 'Mastodon', 'Porter', 'Zoe'];

// let ourFavBandsArtists = [...yourFavBandsArtists, ...myFavBandsArtists];

// console.log(ourFavBandsArtists)


// Join()

// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT'];
// let bandsString = yourFavBandsArtists.join();
// console.log(bandsString);

// let secondBandsString = yourFavBandsArtists.join(' or ');
// console.log(secondBandsString);

// push() and unshift() 
// both methods modify/mutate original arrays

// push means you can elements to the end of the array
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// yourFavBandsArtists.push('Foo Fighters', 'Green Day')
// console.log(yourFavBandsArtists);

// unshift adds to beginning of array
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// yourFavBandsArtists.unshift('Foo Fighters', 'Green Day')
// console.log(yourFavBandsArtists)

// pop() and shift()
// these take away from array

// // pop() takes last element away from array, making a string
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// let lastBand= yourFavBandsArtists.pop();
// console.log(lastBand)
// console.log(typeof lastBand)
// // you get everyone but MGMT bc pop() changed the array. MGMT is not part of array anymore
// console.log(yourFavBandsArtists)

// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// let firstBandArtist = yourFavBandsArtists.shift();
// console.log(firstBandArtist);
// console.log(yourFavBandsArtists)

// splice()
// is capable of adding or removing any number of elements to/from an array
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// let removedBands = yourFavBandsArtists.splice(3,2, 'Alt-J', 'Linkin Park');
// // 3 is teh spot where it starts, 2 is the amount of elements being removed, the strings are the words we are putting in their place
// console.log(removedBands)
// console.log(yourFavBandsArtists)

// slice()
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']

// let extractedBands = yourFavBandsArtists.slice(1, 3)
// console.log(extractedBands)
// console.log(yourFavBandsArtists)

// at()
// access elements at the given position in the array
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// let myBand = yourFavBandsArtists.at(3)
// console.log(myBand) 


// flat()
// 
// let numArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [
//         [7, 8, 9],
//         [10, 11, 12],
//         [13, 14, 15]
//     ],
// ]
// when you are flatening an array it becomes un nested

// nested arrays are multi-dimensional

// let flatArr = numArray.flat();
// console.log(flatArr);
// => [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ] ]
// it targeted only one layer of the array

// What if you wanted to target multiple layers of the array

// let multi = numArray.flat(2);
// console.log(multi);
// => [
//    1,  2,  3,  4,  5,  6,
//    7,  8,  9, 10, 11, 12,
//   13, 14, 15
// ]

// sort()
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// let numArr = [4,7,-5,-2,120,77,1,97,0.5]

// yourFavBandsArtists.sort();
// console.log(yourFavBandsArtists)

// numArr.sort()
// console.log(numArr)

// indexOf() and lastIndexOf()
// indexOf() will look for the value passed into it and return the
// index of the first element that matches the value
// let yourFavBandsArtists = ['Red Hot Chili Peppers', 'Modest Mouse', 'U2', 'Cold Play', 'Blink 182', 'MGMT']
// let indexOfArr = yourFavBandsArtists.indexOf('MGMT');
// console.log(indexOfArr)
// => 5

