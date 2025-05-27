import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const MyNavbar = () => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<>
			<nav className="Navbar-css">
				<section>
					<Link className="Link-logo" to="/">
						Logo
					</Link>
				</section>
				<section>
					<section
						className={`navbar-right-container ${collapsed ? "" : "show"}`}>
						<Link className="Link-navbar">About</Link>
						<Link className="Link-navbar">Home</Link>
						<Link className="Link-navbar">ContactUs</Link>
						<Link
							className="Link-navbar show-menu navbar-collapse"
							onClick={() => setCollapsed(!collapsed)}>
							Collapse
						</Link>
					</section>
					<button
						className={`show-menu ${collapsed ? "" : "hide-button"}`}
						onClick={() => setCollapsed(!collapsed)}>
						Show Menu
					</button>
				</section>
			</nav>
		</>
	);
};

export default MyNavbar;
