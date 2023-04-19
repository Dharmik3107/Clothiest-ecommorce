import React, { useContext, useMemo } from "react";

//Internal Imports - Components
import ItemCard from "../../components/ItemCard/ItemCard";

//Internal Imports - Contexts
import { ProductContext } from "../../contexts/product";

//Styling Sheets Imports
import "./Category.scss";

const CATEGORIES = ["daytimedresses", "dresses", "jeans", "sneakers", "tshirts"];

const Women = () => {
	const { productMapWomen } = useContext(ProductContext);

	const products = useMemo(() => {
		const getRandomizedProduct = (dataList = {}) => {
			const aux = CATEGORIES.flatMap((category) => dataList[category] || []);
			const random = [];

			for (let i = 0; i < aux.length / 5; i++) {
				random.push(aux[i]);
				random.push(aux[i + 48]);
				random.push(aux[i + 48 * 2]);
				random.push(aux[i + 48 * 3]);
				random.push(aux[i + 48 * 4]);
			}

			return random;
		};

		return getRandomizedProduct(productMapWomen);
	}, [productMapWomen]);

	return (
		<section className="shop-container">
			<div className="filter-container"></div>
			<div className="item-list">
				{products.map((product, index) => {
					return <ItemCard key={index} product={product} />;
				})}
			</div>
		</section>
	);
};

export default Women;
