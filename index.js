// 1-masala

// let arr = [1,2,3,4,5,6,7,8,9]
// function toq(arr){
//     let toq = 0;
//     for (const iterator of arr) {
//         if(iterator % 2 == 1){
//            toq ++
//         }
//     }
//     return toq
// }
// console.log(toq(arr));

// 2-masala
// let str = 'Sa2lom1'
// function string(str){
//     let son = [];
//     for (const iterator of str) {
//         if(iterator > 0){
//             son.push(iterator)
//         }
//     }
//     return son;
// }
// console.log(string(str));


// 4-masala
// let arr =[1,23,4,5,6,7,8,9]
// let res = Math.min(...arr) 
// console.log(res);


// 5-masala
// let str = "salom"
// function teskari(str){
//     let res = str.split('').reverse().join('');
//     return res; 
// }
// console.log(teskari(str));

// // 7-masala
// let arr = [2,4,6,7,8,0,9,1,5]
// function teskari(arr){
//     let res = arr.sort(function(a,b){
//         return a-b
//     })
//     return res
// }
// console.log(teskari(arr));

// 9-masala
// let arr =['salom','xayir']
// function kattaHarif(arr){
//     return arr.map(item => item.toUpperCase());
// }
// console.log(kattaHarif(arr));

// 10-masala

// let arr = [1,2,3,4,5,6,7,8,9]

// function toqSonlar(arr){
//     let res =[]
//     for (const iterator of arr) {
//         if(iterator  % 2 == 1){
//             res.push(iterator)
//         }
//     }
//     return res 
// }
// console.log(toqSonlar(arr));

// 12-masala

// let  arr = [1,2,3]
// function yigindi(arr){
//     let sum = 0;
//     for (let i = 0; i< arr.length; i++) {
//         sum +=arr[i]
//     }
//     return sum
// }
// console.log(yigindi(arr));

// 13-masala
// let arr = [1,-2,3,-4,5,-6]
// function manfiySon(arr){
//     let musbtaSon = []
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] >= 0){
//             musbtaSon.push(arr[i])
//         }
//     }
//     return musbtaSon
// }
// console.log(manfiySon(arr));

// 14 - masala
// let arr = [1,2,3,4,5,6,7,8,9]
// function kvadratSonlar(arr){
//     let kvadrat =[]
//     for(let i =0; i < arr.length; i++){
//         kvadrat.push(arr[i]** 2)
//     }
//     return kvadrat
// }
// console.log(kvadratSonlar(arr));

// 17 - masala
// let arr = [9,8,7,6,5,4,3,2,1]
// function teskariTartib(arr){
//     let res =[]
//     for(let i = arr.length -1; i >= 0; i --){
//         res.push(arr[i])
//     } 
//     return res
// }
// console.log(teskariTartib(arr));

// 18 -masala

// let arr =  ["olma", "nok", "banan", "uzum", "shaftoli"];
// function alifbo(arr){
//     return arr.sort();
// }
// console.log(alifbo(arr));

// 20-masala
// let arr =["olma", "nok", "banan", "uzum", "shaftoli"];
// function boshXariflar(arr){
//     let res = arr.map(function(v){
//         return v[0].toUpperCase() + v.slice(1)
//     })
//     return res
// }
// console.log(boshXariflar(arr));

// 21-masala
let arr ="olma,   nok,   banan,   uzum,   shaftoli";
function boshJoylar(arr){
    return arr.split(' ').join('');
}
console.log(boshJoylar(arr));
