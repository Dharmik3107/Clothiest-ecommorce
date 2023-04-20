import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user";
import { ProductProvider } from "./contexts/product";
import { CartProvider } from "./contexts/cart";
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
						<App />
					</CartProvider>
				</ProductProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
