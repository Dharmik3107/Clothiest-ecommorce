import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
export const createManualSigninUser = async (email, password) => {
	if (!email | !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

//function to singin with stored email and password using above function
export const manualSignin = async () => {
	if (!email | !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};
