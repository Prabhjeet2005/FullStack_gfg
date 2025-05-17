const emp = {
	name: "Prab",
	empId: 101,
	dept: {
		depId: 201,
		deptName: "HR",
	},
};
const {
	name: empName,
	dept: { deptName: DEPARTMENT_NAME },
} = emp;
console.log(DEPARTMENT_NAME);
console.log(empName);
const empPhone = emp?.phone;
console.log(empPhone);

const { empAddress: { value } = { value: "Fallback Value" } } = emp;
