import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [islogged, setIsLogged] = useState(false)
	const handleLogout = () => {
		
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="btn btn-primary navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
