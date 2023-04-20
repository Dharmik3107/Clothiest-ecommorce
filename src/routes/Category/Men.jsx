import React, { useContext, useMemo, useState } from "react";

//Internal Imports - Components
import ItemCard from "../../components/ItemCard/ItemCard";
import Filter from "../../components/Filter/Filter";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

//Internal Imports - Contexts
import { ProductContext } from "../../contexts/product";

//Styling Sheets Imports
import "./Category.scss";

export const MEN_CATEGORIES = ["jeans", "shirts", "sneakers", "suits", "tshirts"];

const Men = () => {
	const { productMapMen } = useContext(ProductContext);
	const [isFilter, setFilter] = useState("");
	const [isMenuOpen, setMenuOpen] = useState(false);

	const products = useMemo(() => {
		const getRandomizedProduct = (dataList = {}, filter) => {
			let aux = [];
			if (filter) {
				aux = dataList[filter];
				return aux;
			} else {
				aux = MEN_CATEGORIES.flatMap((category) => dataList[category] || []);
				const random = [];

				for (let i = 0; i < aux.length / 5; i++) {
					random.push(aux[i]);
					random.push(aux[i + 48]);
					random.push(aux[i + 48 * 2]);
					random.push(aux[i + 48 * 3]);
					random.push(aux[i + 48 * 4]);
				}

				return random;
			}
		};

		return getRandomizedProduct(productMapMen, isFilter);
	}, [productMapMen, isFilter]);

	return (
		<section className="shop-container">
			<div className="filter-container">
				<Filter setMenuOpen={setMenuOpen} />
				{isMenuOpen && <FilterMenu isFilter={isFilter} setFilter={setFilter} />}
			</div>
			<div className="item-list">
				{products.map((product, index) => {
					return <ItemCard key={index} style="him" product={product} />;
				})}
			</div>
		</section>
	);
};

export default Men;
