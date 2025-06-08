import React, { useState } from "react";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardImg,
	Col,
} from "react-bootstrap";
import "../style.css";
import { Rating } from "react-simple-star-rating";
import { BagHeartFill, Cart3 } from "react-bootstrap-icons";

const ProductCard = ({ product }) => {
	const { id, title, price, description, category, image, rating } = product;
	const [addCart, setAddCart] = useState(false);
	return (
		<Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 10 }}>
			<Card className="product">
				<CardImg className="image" src={image} />
				<CardBody>
					<section className="title">{title}</section>
					<section className="price">{price}</section>
					<section className="description">{description}</section>
					<section className="rating">
						<Rating
							size={25}
							readonly
							allowFraction
							initialValue={rating.rate}
						/>
						{rating.rate}
					</section>
				</CardBody>
				<CardFooter className="footer">
					{!addCart && (
						<Button onClick={()=>setAddCart(!addCart)} className="addtocart">
							Add To Cart <Cart3 />{" "}
						</Button>
					)}
					{addCart && (
						<section className="addtocart-counter">
							<section>-</section>
							<section>CartNo</section>
							<section>+</section>
						</section>
					)}
				</CardFooter>
			</Card>
		</Col>
	);
};

export default ProductCard;
