import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
const Products = () => {
	const url = "https://fakestoreapi.com/products";
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// IIFE
		(async () => {
			const data = (await axios.get(url)).data;
			setProducts(data);
		})();
	}, []);

	return (
		<Container fluid>
			<Row>
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</Row>
		</Container>
	);
};

export default Products;
