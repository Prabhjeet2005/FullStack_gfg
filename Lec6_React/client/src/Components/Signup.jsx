import React, { useReducer, useRef, useState } from "react";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Col,
	Container,
	FormControl,
	FormGroup,
	FormLabel,
	Row,
} from "react-bootstrap";
import "../index.css";
import { initialState, signupReducer } from "../reducers/signupReducer";
const Signup = () => {
	const passwordRef = useRef(null);
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	// useReducer() Hook
	const [state, dispatch] = useReducer(signupReducer, initialState);
	const { name, email, password, username } = state;

	// Use regex101 Website to test Pattern Matching
	// const namePattern = /[A-Z][a-z]+/;
	// const emailPattern = /^([a-z]+[0-9]+)@([a-z]+[.][a-z]+)/;
	// const upperCaseCheck = /[A-Z]+/.test(password);
	// const lowerCaseCheck = /[a-z]+/.test(password);
	// const numberCheck = /\d+/.test(password);
	// // const lengthCheck = password.length >= 8;
	// const isNameValid = name && namePattern.test(name);
	// const isEmailValid = email && emailPattern.test(email);
	// const isPasswordValid =
	// 	upperCaseCheck && lowerCaseCheck && numberCheck && lengthCheck;

	// const showPasswordHandler = () => {
	// 	const passwordCurrentType = passwordRef.current.type;
	// 	console.log("Hellio");
	// 	if (passwordCurrentType === "text") {
	// 		passwordRef.current.type = "password";
	// 	} else {
	// 		passwordRef.current.type = "text";
	// 	}
	// };

	const isPasswordValid = Object.values(password.validation).every(Boolean);
	const isFormValid = name.isValid && email.isValid && isPasswordValid;

	return (
		<>
			<hr />
			<Container fluid>
				<Row>
					<Col
						className="signup-login-box"
						lg={{ span: 6, offset: 3 }}
						md={{ span: 6, offset: 3 }}
						sm={{ span: 8, offset: 2 }}>
						<Card>
							<CardHeader className="signup-center">signup</CardHeader>
							<CardBody>
								<FormGroup controlId="name">
									<FormLabel className="name-signup">Name</FormLabel>
									<FormControl
										type="text"
										onChange={(e) =>
											dispatch({ type: "name", payload: e.target.value })
										}
										placeholder="Enter Name"
									/>
									{name.value && !name.isValid && (
										<span
											className={
												name.isValid
													? "password-valid"
													: "password-invalid"
											}>
											Invalid Name
										</span>
									)}
								</FormGroup>
								<FormGroup controlId="email">
									<FormLabel className="name-signup">Email</FormLabel>
									<FormControl
										type="text"
										onChange={(e) =>
											dispatch({ type: "email", payload: e.target.value })
										}
										placeholder="Enter Email"
									/>
									{email.value && !email.isValid && (
										<span
											className={
												email.isValid
													? "password-valid"
													: "password-invalid"
											}>
											Invalid Email
										</span>
									)}
								</FormGroup>
								<FormGroup controlId="Password">
									<FormLabel className="name-signup">Password</FormLabel>
									<FormControl
										ref={passwordRef}
										type="password"
										onChange={(e) =>
											dispatch({ type: "password", payload: e.target.value })
										}
										placeholder="Enter Password"
									/>
									{password.value && !isPasswordValid && <section>
										<li
											className={
												password.validation.hasLowerCase
													? "password-valid"
													: "password-invalid"
											}>
											At Least 1 LowerCase
										</li>
										<li
											className={
												password.validation.hasUpperCase
													? "password-valid"
													: "password-invalid"
											}>
											At Least 1 UpperCase
										</li>
										<li
											className={
												password.validation.hasSpecialSymbols
													? "password-valid"
													: "password-invalid"
											}>
											At Least 1 Number
										</li>
										<li
											className={
												password.validation.meetMinLength
													? "password-valid"
													: "password-invalid"
											}>
											At Least 8 Characters
										</li>
									</section>}
								</FormGroup>
							</CardBody>
							<CardFooter className="signup-center">
								<button disabled={!isFormValid} className="btn rounded-lg btn-primary">signup</button>
								{/* <button onClick={(e) => showPasswordHandler()} className="btn ">
									Show Password
								</button> */}
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Signup;
