//1)

// const frutas = ["maçã", "banana", "goiaba"];

// function pushCustom(arr, ...value) {
//     value.forEach((items) => {
//         arr[arr.length] = items;
//     })
//     return arr.length;
// }

// pushCustom(frutas, "pera", "manga");
// console.log(frutas);




// 2)

// function popMelhorado(value) {
//     let lastValue = value.length;
//     if (lastValue <= 0) {
//         console.error("A array ta vazia!");
//         return undefined;
//     } else {
//         const removedItem = value[lastValue - 1];
//         value.length = lastValue - 1;
//         return removedItem;
//     }
// }

// const arrayteste = ["maçã", "pera", "goiaba"];

// console.log(popMelhorado(arrayteste));
// console.log(arrayteste)





// 3)

// function shiftMelhorado(value) {
//     if (value.length === 0) {
//         console.error("A array está vazia!");
//         return undefined;
//     }

//     const removedItem = value[0];

//     for (let i = 0; i < value.length - 1; i++) {
//         value[i] = value[i + 1];
//     }
//     value.length = value.length - 1;

//     return removedItem;
// }

// const linguagens = ["Java", "Javascript", "Python", "Go", "Typescript"];

// console.log(shiftMelhorado(linguagens));
// console.log(linguagens);







// 4)

// function unshift(arr, ...value) {
//     const removedIndex = arr.length;

//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i + value.length] = arr[i];
//     }

//     for (let i = 0; i < value.length; i++) {
//         arr[i] = value[i];
//     }

//     return removedIndex;
// }

// const seiLa = ["a", "b", "c", "d"];
// console.log(unshift(seiLa, "e", "f"));





// 5)

// const arr = ["a", "b", "c", "d"];

// function slice(arr, indexStart, indexEnd) {
//     let newArray = [];
//     let count = 0;

//     if (arr.length < indexEnd) {
//         console.error(`Array não possui ${indexEnd} de comprimento!`);
//         return;
//     }
//     for (indexStart; indexStart < indexEnd; indexStart++) {
//         newArray[count] = arr[indexStart];
//         count++;
//     }
//     return newArray;
// }

// console.log(slice(arr, 2, 4));





// 6)

// function splice (array, indexStart, deleteCount, ...items) {
//     const newArray = []
//     for(let i = indexStart; i < array.length; i++) {
//         if(i >= indexStart && i < indexStart + deleteCount) {
//             arrayToDelete[arrayToDelete.length] = array[i]
//         } else {
//             newArray[newArray.length] = array[i]

//         }
//     }
//     for(let i = 0; i < newArray.length; i++) {
//         array[i] = newArray[i]
//     }
//         array.length = newArray.length

//         for (let i = array.length - 1; i >= indexStart; i--) {
//             array[i + items.length] = array[i]
//         }

//         for (let i = 0; i < items.length; i++) {
//             array[indexStart + i] = items[i]
//         }

//     return arrayToDelete
// }

// const arr = ['maçã', 'banana', 'pêra', 'uva', 'manga', 'abacate', 'côco']
// const pedaco = splice(arr, 2, 2, 'morango', 'tomate')
// console.log(arr)
// console.log(pedaco);




// 7)

// const letters = ['a', 'b', 'c', 'd']

// function foreach(letters, callback) {
//     for (const item of letters) {
//         callback(item);
//     }
// }
// foreach(letters, (item) => {
//     console.log(item);
// });




// 8)

// const letters = ['a', 'b', 'c', 'd']
// function map(letters, callback) {
//     let newArray = [];
//     for (let i = 0; i < letters.length; i++) {
//         newArray.push(callback(letters[i]));
//     }
//     return newArray;
// }
// const novaArray = map(letters, (item) => {
//     return item.toUpperCase();
// });

// console.log(novaArray);





// 9)

// function filter(array, callback) {
//     const newArray =[]

//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i], i, array)){
//             newArray[newArray.length] = array[i]
//         }
//     }

//     return newArray;
// }

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(filter(arr,(item) => {
//     if(item > 6) {
//         return true
//     }
//     return false;
// }));




// 10)

// function reduce(array, callback, initialValue) {
//     let accumulator = initialValue

//     for (let i = 0; i < array.length; i++) {
//         accumulator = callback(accumulator, array[i])
//     }
//     return accumulator
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const soma = reduce(arr, (accumulator, item) => {
//     return accumulator + item
// }, 0)

// console.log(soma)