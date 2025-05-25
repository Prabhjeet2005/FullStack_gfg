import React from "react";
import {
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from "react-router-dom";

const QueryParams = () => {
	const { pathname, search } = useLocation();
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	return (
		<>
			<div>pathname: {pathname}</div>
			<div>entire Search: {search}</div>
			<div>Params: {params.productId}</div>
			<div>search Params: {searchParams.get("lang")}</div>
			<button
				onClick={() => navigate("/",{state:{source:"route2"}})}>
				Navigate to Home
			</button>
		</>
	);
};

export default QueryParams;
