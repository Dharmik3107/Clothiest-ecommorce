import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Category from "./routes/Category/Category";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Category />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default App;
