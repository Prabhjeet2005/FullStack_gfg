import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TestComponent from "./Components/TestComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Flex from "./flexbox/Flex.jsx";
import "./flexbox/index.css"
import MyNavbar from "./Components/MyNavbar.jsx";
import MyNavbar2 from "./Components/MyNavbar2.jsx";
function App() {
	const [name, setName] = useState("Prabhjeet");
	const [displayComponent, setdisplayComponent] = useState(true);
	setTimeout(() => {
		setName("Nikhil");
	}, 5 * 1000);
	const user = {
		name: "Nikhil",
		userId: 101,
	};

	const navigate = useNavigate()
	return (
		<>
		<MyNavbar2 />
		{/* <MyNavbar /> */}
			{/* {displayComponent && <ClassComponent name={name} user={user} />} */}
			<Link to="route1" element={<TestComponent />}>
				Test Route "route1"
			</Link>
			<br />
			<Link to="route2/p123?search=Mobile&lang=EN">Query Params UseCase</Link>
			<br />
			<Link to="flexbox-hw">FlexBox Pattern Hw</Link>
			<button onClick={() => navigate("flexbox-hw")}>Flexbox HW</button>
			<Outlet />
		</>
	);
}

export default App;
