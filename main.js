// let user ="John Doe";
// console.log(user);
// let student = "Valeria";
// console.log(student);
// user = student;
// // //Valeria
// console.log(user);
//
// let test = 1;
// test = ++test;
// test += '1';
// //21
// console.log(test);
// test -= 1;
// //20
// console.log(test);
// test = Boolean(test);
// //true
// console.log(test);
//
// let arr = [2, 3, 5, 8];
// let result = 1;
// for (let i=0; i < arr.length; i++) {
//     result *= arr[i];
// }
// console.log(result);
//
// let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 5 && arr2[i] < 10) {
//         console.log(arr2[i]);
//     }
// }
//
// let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
// console.log("Массив: " + arr3);
// console.log("Четные элементы массива: ")
// for (let i=0; i < arr3.length; i++) {
//     if (arr3[i] % 2 === 0){
//         console.log(arr3[i]);
//     }
// }




// lesson-3
function palindrome(str) {

    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str[0] === str[1];
    }
    if (str[0] === str.slice (-1)) {
        return palindrome(str.slice(1, -1));
    }
    return false;
}
console.log (palindrome('шалаш'))

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}
console.log(min(16, 70))

function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
console.log(max(890, 70))


    min = 0;
    max = 100;
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    console.log(arr);
// function strZero (arr2) {
//     let newArr = [];
//     arr2 = arr;
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i] % 10 === 0 || arr2[i] === 0) {
//             arr2[i] = arr2[i].toString().replace('0', 'zero');
//             console.log(arr2[i]);
//             newArr.push(arr2[i]);
//         } else {
//             newArr.push(arr2[i]);
//         }
//     } return newArr;
// }
// console.log(strZero(arr2))


function strZero () {
    let newArr = [];
    let arr2 = arr;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 10 === 0 || arr2[i] === 0) {
            arr2[i] = arr2[i].toString().replace('0', 'zero');
            newArr.push(arr2[i]);
        } else {
            newArr.push(arr2[i]);
        }
    } return newArr;
}
console.log(strZero())