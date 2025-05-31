import React, { useRef, useState } from "react";
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
const Login = () => {
	const passwordRef = useRef(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// Use regex101 Website to test Pattern Matching
	const namePattern = /[A-Z][a-z]+/;
	const emailPattern = /^([a-z]+[0-9]+)@([a-z]+[.][a-z]+)/;
	const upperCaseCheck = /[A-Z]+/.test(password);
	const lowerCaseCheck = /[a-z]+/.test(password);
	const numberCheck = /\d+/.test(password);
	const lengthCheck = password.length >= 8;

	// console.log("------------------------------------");
	// console.log("🚀 ~ login ~ lowerCaseCheck:", lowerCaseCheck);
	// console.log("🚀 ~ login ~ upperCaseCheck:", upperCaseCheck);
	// console.log("🚀 ~ login ~ numberCheck:", numberCheck);
	// console.log("🚀 ~ login ~ lengthCheck:", lengthCheck);

	const isNameValid = name && namePattern.test(name);
	const isEmailValid = email && emailPattern.test(email);
	const isPasswordValid =
		upperCaseCheck && lowerCaseCheck && numberCheck && lengthCheck;

	const showPasswordHandler = () => {
		const passwordCurrentType = passwordRef.current.type;
		if (passwordCurrentType === "text") {
			passwordRef.current.type = "password";
		} else {
			passwordRef.current.type = "text";
		}
	};

	return (
		<>
			<hr />
			<Container fluid>
				<Row>
					<Col
						lg={{ span: 6, offset: 3 }}
						md={{ span: 6, offset: 3 }}
						sm={{ span: 8, offset: 2 }}>
						<Card>
							<CardHeader className="login-center">login</CardHeader>
							<CardBody>
								<FormGroup controlId="name">
									<FormLabel className="name-login">Name</FormLabel>
									<FormControl
										type="text"
										onChange={(e) => setName(e.target.value)}
										placeholder="Enter Name"
									/>
									{!isNameValid && (
										<span className={"login-invalid"}>Invalid Name</span>
									)}
								</FormGroup>
								<FormGroup controlId="email">
									<FormLabel className="name-login">Email</FormLabel>
									<FormControl
										type="text"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter Email"
									/>
									{!isEmailValid && (
										<span className={"login-invalid"}>Invalid Email</span>
									)}
								</FormGroup>
								<FormGroup controlId="password">
									<FormLabel className="name-login">Password</FormLabel>
									<FormControl
										ref={passwordRef}
										type="password"
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Enter Password"
									/>
									{!isPasswordValid && (
										<span className={"login-invalid"}>Invalid Password</span>
									)}
								</FormGroup>
								<FormGroup controlId="confirmPassword">
									<FormLabel>Confirm Password</FormLabel>
									<FormControl
										onChange={(e) => setConfirmPassword(e.target.value)}
										type="text"
										placeholder="Confirm Password"
									/>
									{password !== confirmPassword && (
										<span className="login-invalid">
											Password Doesn't Match
										</span>
									)}
								</FormGroup>
							</CardBody>
							<CardFooter className="login-center">
								<button className="btn rounded-lg btn-primary">login</button>
								<button onClick={(e) => showPasswordHandler()} className="btn ">
									Show Password
								</button>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Login;
