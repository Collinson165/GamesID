import { useState } from "react";
import { auth, provider } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import Link from "next/link";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // redirect to account page or perform necessary action;
        } catch(error){
            console.log('Error Signing Up', error);
        }
    };

    const handleGoogleSignUp =  () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    return (
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-400 dark:bg-gray-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-32 w-auto"
                src="/gameid.png"
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-400">
                Sign Up Today!
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
                    Password
                    </label>
                    <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-400  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSignUp}
                >
                    Sign Up with Email
                </button>
                
                </div>
            </form>
            <button
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={handleGoogleSignUp}
                >
                    Sign Up with Google
                </button>

            <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Log In
                </Link>
            </p>
            </div>
        </div>
        </>
    )
};

export default SignUp;