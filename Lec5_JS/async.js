const promise = new Promise((res, rej) => {
	res(123);
});
const fn = async () => {
	const data = await promise;
	console.log(data);
};

const url = "https://dummyjson.com/users";

const networkApi = async () => {
	try {
    const data = await fetch(url);
    	console.log(data);
  } catch (error) {
    console.log(error);
  }
};
networkApi();
