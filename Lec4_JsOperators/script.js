// const sumN = (...params) => {
// 	console.log(params);
//   params.reduce((p,c,i)=>p+c,0)
// };

// sumN(1, 2, 3, 4, 5, 6);

// const arr = [1, 2, 3, 4, 5, 6];
// const [n1, n2, ...rest] = arr;
// console.log(n1);
// console.log(n2);
// console.log(rest);

const arr = [1, [2, 3], 4];
const arr2 = [...arr];
arr2[0] = 999;
arr[1][0] = 999;
console.log(arr);
console.log(arr2);



// lodash.clonedeep
