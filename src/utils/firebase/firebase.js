import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

//Setting the provider to user google sign-in facility
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});
export const auth = getAuth();
export const popupSignin = () => signInWithPopup(auth, provider);

//Saving the user data if it is not exist or returning the data if it exists in database
export const database = getFirestore();

export const createUserDocument = async (userData) => {
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
			});
		} catch (error) {
			console.error("Error creating the user", error.message);
		}
	}

	return userDocRef;
};
