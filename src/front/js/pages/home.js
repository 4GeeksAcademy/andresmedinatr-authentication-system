import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>What would u like to do?</h1>
			<Link to="/register"><button type="button" className="btn btn-success">Register Page</button></Link>
			<Link to="/login"><button type="button" className="btn btn-success">Login Page</button></Link>

		</div>
	);
};
