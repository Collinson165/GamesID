import { useEffect, useState } from "react";
import { auth } from "../components/firebase";

export function useAuth(){
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const logout = () => {
        auth.signOut()
            .then(() => {
                console.log('Looged Out')
            })
            .catch((error) => {
                console.error('Logout Failed', error)
            })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                setUser({
                    uid: authUser.uid,
                    email: authUser.email,
                    photoURL: authUser.photoURL,
                    displayName: authUser.displayName,
                });
            } else {
                setUser(null)
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { user, loading, logout};
}