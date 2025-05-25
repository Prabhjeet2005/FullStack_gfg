import React from "react";
import TestComponent from "../Components/TestComponent";
import DeeperComponent from "../Components/DeeperComponent";
import QueryParams from "../Components/QueryParams";
import Flex from "../flexbox/flex";

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
	{ path: "flexbox-testing", element: <Flex /> },
];
