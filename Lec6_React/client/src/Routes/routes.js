import React from "react";
import TestComponent from "../Components/TestComponent";
import DeeperComponent from "../Components/DeeperComponent";
import QueryParams from "../Components/QueryParams";
import Flex from "../flexbox/Flex.jsx";
import Login from "../Components/Login.jsx";
import Signup from "../Components/Signup.jsx";

export const routes = [
	{
		path: "route1",
		element: <TestComponent />,
		children: [{ path: "deeper", element: <DeeperComponent /> }],
	},
	{
		path: "route2/:productId",
		element: <QueryParams />,
	},
	{ path: "flexbox-hw", element: <Flex /> },
	{ path: "login", element: <Login /> },
	{ path: "signup", element: <Signup /> },
];
