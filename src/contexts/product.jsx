import { createContext, useState, useEffect } from "react";
import { getCategoryAndProducts } from "../utils/firebase/firebase";

export const productContext = createContext({
	productMapMen: [],
	productMapWomen: [],
});

export const productProvider = ({ children }) => {
	const [productMapMen, setProductMapMen] = useState({});
	const [productMapWomen, setProductMapWomen] = useState({});

	useEffect(() => {
		const getProductsMap = async () => {
			const menProducts = await getCategoryAndProducts("menCategories");
			setProductMapMen(menProducts);
			const womenProducts = await getCategoryAndProducts("menCategories");
			setProductMapWomen(womenProducts);
		};

		getProductsMap();
	}, []);

	const value = { productMap };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
