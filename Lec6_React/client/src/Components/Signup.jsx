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
const Signup = () => {
  const passwordRef = useRef(null)
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  // Use regex101 Website to test Pattern Matching
	const namePattern = /[A-Z][a-z]+/;
	const emailPattern = /^([a-z]+[0-9]+)@([a-z]+[.][a-z]+)/;
	const upperCaseCheck = /[A-Z]+/.test(password);
	const lowerCaseCheck = /[a-z]+/.test(password);
	const numberCheck = /\d+/.test(password);
	const lengthCheck = password.length >= 8;

  console.log("------------------------------------");
	console.log("🚀 ~ Signup ~ lowerCaseCheck:", lowerCaseCheck)
	console.log("🚀 ~ Signup ~ upperCaseCheck:", upperCaseCheck)
	console.log("🚀 ~ Signup ~ numberCheck:", numberCheck)
	console.log("🚀 ~ Signup ~ lengthCheck:", lengthCheck)


	const isNameValid = name && namePattern.test(name);
	const isEmailValid = email && emailPattern.test(email);
	const isPasswordValid =
		upperCaseCheck && lowerCaseCheck && numberCheck && lengthCheck;

  const showPasswordHandler = ()=>{
    const passwordCurrentType = passwordRef.current.type;
    console.log("Hellio");
    if(passwordCurrentType ==="text"){
      passwordRef.current.type = "password";
    }else{
      passwordRef.current.type = "text";
    }
  }

	return (
		<>
			<hr />
			<Container fluid >
				<Row>
					<Col className="signup-login-box"
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
										onChange={(e) => setName(e.target.value)}
										placeholder="Enter Name"
									/>
									{!isNameValid && (
										<span className={"signup-invalid"}>Invalid Name</span>
									)}
								</FormGroup>
								<FormGroup controlId="email">
									<FormLabel className="name-signup">Email</FormLabel>
									<FormControl
										type="text"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter Email"
									/>
									{!isEmailValid && (
										<span className={"signup-invalid"}>Invalid Email</span>
									)}
								</FormGroup>
								<FormGroup controlId="password">
									<FormLabel className="name-signup">Password</FormLabel>
									<FormControl
                    ref={passwordRef}
										type="password"
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Enter Password"
									/>
									{!isPasswordValid && <span className={"signup-invalid"}>Invalid Password</span>}
								</FormGroup>
							</CardBody>
							<CardFooter className="signup-center">
								<button className="btn rounded-lg btn-primary">signup</button>
                <button onClick={(e)=>showPasswordHandler()} className="btn ">Show Password</button>
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Signup;
