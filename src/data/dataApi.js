import axios from "axios";

const options = {
	method: "GET",
	url: "https://zappos1.p.rapidapi.com/products/detail",
	params: { productId: "9143855" },
	headers: {
		"X-RapidAPI-Key": "56d5d3de1bmshcd3f3e9c629234cp1bf2b0jsnf3be0463d7cf",
		"X-RapidAPI-Host": "zappos1.p.rapidapi.com",
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
	})
	.catch(function (error) {
		console.error(error);
	});
