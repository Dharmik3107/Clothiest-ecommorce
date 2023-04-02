import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
import axios from "axios";

// Configuring firebase
const firebaseConfig = {
	apiKey: "AIzaSyBZg3WM40B5AvIUA-IPLpL7bo67xVXG_B0",
	authDomain: "clothiest-ecommerce.firebaseapp.com",
	projectId: "clothiest-ecommerce",
	storageBucket: "clothiest-ecommerce.appspot.com",
	messagingSenderId: "408153046633",
	appId: "1:408153046633:web:27c24565a645320da76cf8",
};
initializeApp(firebaseConfig);

//!------Signup and Login Setup------
//Setting the provider to use google sign-in facility
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});
export const auth = getAuth();
export const popupSignin = () => signInWithPopup(auth, provider);

//Calling getFirestore function to work with firestore
export const database = getFirestore();

//Creating user document to store details in firebase datastore
export const createUserDocument = async (userData, otherData = {}) => {
	const userDocRef = doc(database, "users", userData.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userData;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...otherData,
			});
		} catch (error) {
			console.error("Error creating the user", error.message);
		}
	}

	return userDocRef;
};

//function to get user object for saving the user in firebase database with manual sign in using email and passsword
export const createManualSignupUser = async (email, password) => {
	if (!email | !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

//function to singin with stored email and password using above function
export const manualSignin = async () => {
	if (!email | !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

//function to signout
export const signOutUser = () => signOut();

//Authentication state change listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

//!------Products storing and querying Setup------
// function to add products in collection with title
export const addCategoryAndProducts = async (collectionKey, dataObjectToAdd) => {
	const batch = writeBatch(database);
	const collectionRef = collection(database, collectionKey);

	dataObjectToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("Data Stored");
};

//function query stored product from firebase
export const getCategoryAndProducts = async () => {
	const collectionRef = collection(database, "categories");
	const queryRef = query(collectionRef);

	const querySnapshot = await getDocs(queryRef);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};

//!Getting Data from API and Storing in firestore
//!Categories ID
//*Mens Categories
// Jeans:4208
// T-Shirts:5232
// Suits & Tailoring: 8134
// Shirts: 3136
// Sneakers: 50537

//*Womens Categories
// Dresses: 15622
// Tops: 4167
// Jeans: 4331
// Sneakers: 20494
// Daytime Dress: 15623

// export const categoryArrayMen = [
// 	{ title: "jeans", categoryID: 4208 },
// 	{ title: "tshirts", categoryID: 5232 },
// 	{ title: "suits", categoryID: 8134 },
// 	{ title: "shirts", categoryID: 3136 },
// 	{ title: "sneakers", categoryID: 50537 },
// ];
// export const categoryArrayWomen = [
// 	{ title: "jeans", categoryID: 4331 },
// 	{ title: "tshirts", categoryID: 4167 },
// 	{ title: "dresses", categoryID: 15622 },
// 	{ title: "daytimeDresses", categoryID: 15623 },
// 	{ title: "sneakers", categoryID: 20494 },
// ];

// export const getDataFromApi = async (productArray) => {
// 	const auxArray = [];
// 	await Promise.all(
// 		productArray.map(async (element) => {
// 			const options = {
// 				method: "GET",
// 				url: "https://asos2.p.rapidapi.com/products/v2/list",
// 				params: {
// 					store: "US",
// 					offset: "0",
// 					categoryId: element.categoryID,
// 					limit: "100",
// 					country: "US",
// 					sort: "freshness",
// 					currency: "USD",
// 					sizeSchema: "US",
// 					lang: "en-US",
// 				},
// 				headers: {
// 					"X-RapidAPI-Key": "56d5d3de1bmshcd3f3e9c629234cp1bf2b0jsnf3be0463d7cf",
// 					"X-RapidAPI-Host": "asos2.p.rapidapi.com",
// 				},
// 			};

// 			try {
// 				await axios.request(options).then((result) => {
// 					console.log(`---${element.title}---`, result.data.products);
// 					const heading = element.title;
// 					auxArray.push({ title: heading, data: result.data.products });
// 				});
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		})
// 	);
// 	return auxArray;
// };
