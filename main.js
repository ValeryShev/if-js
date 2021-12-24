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
// function palindrome(str) {
//
//     if (str.length === 1) {
//         return true;
//     }
//     if (str.length === 2) {
//         return str[0] === str[1];
//     }
//     if (str[0] === str.slice (-1)) {
//         return palindrome(str.slice(1, -1));
//     }
//     return false;
// }
// console.log (palindrome('шалаш'))
//
// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }
// console.log(min(16, 70))
//
// function max(a, b) {
//     if (a > b) {
//         return a;
//     }
//     return b;
// }
// console.log(max(890, 70))
//
// min = 0;
// max = 100;
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * (max - min) + min));
// }
// console.log(arr);
// function strZero (arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 10 === 0 || arr[i] === 0) {
//             arr[i] = arr[i].toString().replace('0', 'zero');
//             newArr.push(arr[i]);
//         }
//         else {
//             newArr.push(arr[i]);
//         }
//     } return newArr;
// }
// console.log(strZero(arr))


//lesson-4
// function sum(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(sum(2)(8))
//
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// let firstP = document.getElementById("text1");
// let secondP = document.getElementById("text2");
// let thirdP = document.getElementById("text3");
// function changeColor () {
//     let color = 0;
//     return function () {
//         this.style.color = colors[color];
//         color++;
//         if (color === colors.length) {
//             color = 0;
//         }
//     }
// }
// firstP.addEventListener('click', changeColor());
// secondP.addEventListener('click', changeColor());
// thirdP.addEventListener('click', changeColor());


//lesson-5
let date = '2020-11-26'
function dateFormate() {
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (dateReg.test(date)) {
        date = date.split('-')
            .reverse()
            .join('.');
        return date;
    }
}
console.log(dateFormate(date))


const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
const resultOfSearch = [];
function search(str) {
str = str.toLowerCase();
    for (let i = 0; i < data.length; i++) {
        const dataValues = Object.values(data[i]);
        if (dataValues.includes(str)) {
            resultOfSearch.push(dataValues.join(' '));
        }
    }
    if (resultOfSearch.length !== 0) {
        return resultOfSearch;
    } else {
        throw 'Совпадений по запросу нет';
    }
}

