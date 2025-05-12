const arr = [1, 2, 3, 4, 5];
// .forEach

arr.forEach((val, index) => {
	console.log(`Value: ${val}, Index: ${index}`);
});

const sqNum = arr.map((val) => val ** 2);
console.log(sqNum);

const sqEvenNum = arr
	.filter((val) => {
		return val % 2 === 0;
	})
	.map((val) => {
		return val ** 2;
	});
console.log(sqEvenNum);

arr.reduce((prev,curr,index)=>{
  console.log(`Prev: ${prev}`);
  console.log(`Curr: ${curr}`);
  console.log(`Index: ${index}`);

  return prev+curr;
},0)
