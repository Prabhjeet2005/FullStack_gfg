import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TestComponent from "./Components/TestComponent";

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
	return (
		<>
			{/* {displayComponent && <ClassComponent name={name} user={user} />} */}
			<Link to="route1" element={<TestComponent />}>
				Test Route "route1"
			</Link><br />
			<Link to="route2/p123?search=Mobile&lang=EN" >Query Params UseCase</Link>
			<Outlet />
		</>
	);
}

export default App;
