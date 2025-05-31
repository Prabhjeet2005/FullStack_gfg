import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MyNavbar2 = () => {
	const [dispalyMenu, setDispalyMenu] = useState(false);
	useEffect(() => {
		console.log(dispalyMenu);
	}, [dispalyMenu]);

	return (
		<>
			<section className="navbar-2-container">
				<section className="navbar-2-logo">Logo</section>
				<section
					className={`navbar-2-otherItems-container ${
						dispalyMenu ? "" : "navbar-items-hide"
					}`}>
					<Link className="navbar-2-otherItems">Info</Link>
					<Link to="login" className="navbar-2-otherItems">
						Login
					</Link>
					<Link to="signup" className="navbar-2-otherItems">
						Signup
					</Link>
					<Link
						onClick={() => setDispalyMenu(!dispalyMenu)}
						className={`collapse-button navbar-2-otherItems `}>
						collapse
					</Link>
				</section>
				<Link
					id="menu-button"
					onClick={() => {
						setDispalyMenu(!dispalyMenu);
					}}
					className={`navbar-2-otherItems navbar-2-menu ${
						dispalyMenu ? "" : "menu-show"
					}`}>
					Menu
				</Link>
			</section>
		</>
	);
};

export default MyNavbar2;
