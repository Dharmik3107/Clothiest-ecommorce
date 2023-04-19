import { Routes, Route } from "react-router-dom";

//Internal Imports - Components
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Men from "./routes/Category/Men";
import Women from "./routes/Category/Women";

//Styling Sheets Imports
import "./App.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				{/* Done */}
				<Route index element={<Home />} />
				{/* Done */}
				<Route path="men" element={<Men />} />
				<Route path="women" element={<Women />} />
				<Route path="contact" element={<Contact />} />
				<Route path="login" element={<Login />} />
				{/* Done */}
				<Route path="register" element={<Register />} />
				{/* Done */}
			</Route>
		</Routes>
	);
}

export default App;
