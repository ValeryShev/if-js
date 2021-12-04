let user ="John Doe";
console.log(user);
let student = "Valeria";
console.log(student);
user = student;
// //Valeria
console.log(user);

let test = 1;
test = ++test;
test += 1;
//3
console.log(test);
test -= 1;
//2
console.log(test);
test = Boolean(test);
//true
console.log(test);

let arr = [2, 3, 5, 8];
let result = 1;
for (let i=0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}

let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
console.log("Массив: " + arr3);
console.log("Четные элементы массива: ")
for (let i=0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0){
        console.log(arr3[i]);
    }
}

