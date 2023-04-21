import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./contexts/user";
import { ProductProvider } from "./contexts/product";
import { CartProvider } from "./contexts/cart";
import { WishlistProvider } from "./contexts/wishlist";

import App from "./App";

import "./index.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductProvider>
					<CartProvider>
						<WishlistProvider>
							<App />
							<ToastContainer theme="colored" position="bottom-center" autoClose={5000} hideProgressBar={true} pauseOnFocusLoss pauseOnHover />
						</WishlistProvider>
					</CartProvider>
				</ProductProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
