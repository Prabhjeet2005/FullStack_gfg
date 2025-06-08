const namePattern = /[A-Z][a-z]+/;
const emailPattern = /^(([a-z]+)([0-9]*))@([a-z]+[.][a-z]+)$/;
const usernamePattern = /^[a-z]+$/;

export const initialState = {
	name: { value: "", isValid: false },
	email: { value: "", isValid: false },
	username: { value: "", isValid: false },
	password: {
		value: "",
		validation: {
			hasLowerCase: false,
			hasUpperCase: false,
			hasSpecialSymbols: false,
			meetMinLength: false,
		},
		isValid: false,
	},
};

//  Reduce Function takes prevValue and returns newValue
export const signupReducer = (state = initialState, action) => {
	// action = {type,payload}
	const { type, payload } = action;
	switch (type) {
		case "name":
			return {
				...state,
				name: { value: payload, isValid: namePattern.test(payload) },
			};
		case "email":
			return {
				...state,
				email: { value: payload, isValid: emailPattern.test(payload) },
			};
		case "username":
			return {
				...state,
				username: { value: payload, isValid: usernamePattern.test(payload) },
			};
		case "password":
			return {
				...state,
				password: {
					value: payload, 
					validation: {
						hasUpperCase: /[A-Z]+/.test(payload),
						hasLowerCase: /[a-z]+/.test(payload),
						hasSpecialSymbols: /\d+/.test(payload),
						meetMinLength: payload.length >= 8,
					},
				},
			};
		default:
			return state;
	}
};
