import {  RouterProvider } from "react-router-dom";
import router from "./components/router/router";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

		useEffect(() => {
			// Simulate a delay (e.g., fetching data from an API)
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		}, []);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
