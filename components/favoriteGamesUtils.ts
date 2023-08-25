import { db, auth } from "./firebase";
import { addDoc, collection, getDocs, CollectionReference, getDoc } from "firebase/firestore";

const getUserId = (): string | null => {
    const user = auth.currentUser;
    return user ? user.uid : null;
};

const getFavoriteGamesCollection = () => {
    const userId = getUserId();
    const userDoc = getDocs(collection(db, 'users'))
    const docs = getDocs(collection(db, 'users'))
    // return docs.data()
    // return collection(db, 'users').getDocs(userId).collection('favoriteGames')
}