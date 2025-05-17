// // console.log("clg 1");
// // console.log("clg 1");
// // console.log("clg 1");
// // setTimeout(() => {
// // 	console.log("Time Out");
// // }, 1000);
// // console.log("clg 2");

// const promise = new Promise((resolve, reject) => {
//   resolve(123);
// 	reject("Rejected with 123");
// });
// console.log(promise);
// // Prom,ise fulfilled .then
// promise.then((val) => {
// 	console.log(val);
// });

// const url = `https://dummyjson.com/users`;
// const data = fetch(url);
// data.then((val)=>{
//   console.log(val.json().then((humanReadable)=>{  // .json is again promise
//     console.log(humanReadable);
//   }));
// })

const promise = new Promise((res,rej)=>{
  // res(123);
  rej("Promise Rejected");
})

promise.then((val)=>console.log(val)).catch((err)=>console.log(err));