import { createContext, useState, useEffect } from "react";
import { getCategoryAndProducts } from "../utils/firebase/firebase";

export const ProductContext = createContext({
	productMapMen: [],
	productMapWomen: [],
});

export const ProductProvider = ({ children }) => {
	const [productMapMen, setProductMapMen] = useState({});
	const [productMapWomen, setProductMapWomen] = useState({});

	useEffect(() => {
		const getProductsMap = async () => {
			const menProducts = await getCategoryAndProducts("menCategories");
			setProductMapMen(menProducts);
			const womenProducts = await getCategoryAndProducts("womenCategories");
			setProductMapWomen(womenProducts);
		};

		getProductsMap();
	}, []);

	const value = { productMapMen, productMapWomen };
	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
