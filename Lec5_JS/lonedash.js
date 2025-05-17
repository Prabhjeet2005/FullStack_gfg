const user = {
	id: 1,
	name: "Prabhjeet",
	arr: [1, 2, 3, 4],
};

const userCopy = { ...user };

Object.entries(user).forEach(([k, v]) => console.log(k, v));

const clonedeep = (obj) => {
	const result = Array.isArray(obj) ? [] : {};
	Object.entries(obj).forEach(([key, value]) => {
		if (typeof value !== "object") {
			result[key] = value;
		} else {
			result[key] = clonedeep(value);
		}
	});
	return result;
};

const obj2 = clonedeep(user);
console.log(obj2);
