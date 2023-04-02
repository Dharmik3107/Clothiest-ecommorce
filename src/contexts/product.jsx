import { createContext, useState, useEffect } from "react";
import { getCategoryAndProducts } from "../utils/firebase/firebase";

export const productContext = createContext({
	productMap: [],
});

export const productProvider = ({ children }) => {
	const [productMap, setProductMap] = useState({});

	useEffect(() => {
		const getProductsMap = async () => {
			const productsMap = await getCategoryAndProducts();
			setProductMap(productsMap);
		};

		getProductsMap();
	}, []);

	const value = { productMap };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
