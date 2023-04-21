import { createContext, useEffect, useState } from "react";

const addItemToWishlist = (wishlistItems, newItem) => [...wishlistItems, { ...newItem }];
const removeItemFromWishlist = (wishlistItems, item) => wishlistItems.filter((element) => element.id !== item.id);
const addItemID = (itemIds, itemID) => [...itemIds, itemID];
const removeItemID = (itemIds, itemID) => itemIds.filter((element) => element !== itemID);

export const WishlistContext = createContext({
	wishlistItems: [],
	setWishlistItems: () => {},
	addItemTolist: () => {},
	removeItemFromList: () => {},
	itemIds: [],
	setItemIds: () => {},
});

export const WishlistProvider = ({ children }) => {
	const [wishlistItems, setWishlistItems] = useState([]);
	const [itemIds, setItemIds] = useState([]);
	const addItemTolist = (item) => {
		setWishlistItems(addItemToWishlist(wishlistItems, item));
		setItemIds(addItemID(itemIds, item.id));
	};

	const removeItemFromList = (item) => {
		setWishlistItems(removeItemFromWishlist(wishlistItems, item));
		setItemIds(removeItemID(itemIds, item.id));
	};

	const value = { wishlistItems, setWishlistItems, addItemTolist, removeItemFromList, itemIds, setItemIds };
	return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
