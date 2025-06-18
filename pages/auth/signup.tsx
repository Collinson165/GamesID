import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup(){
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const router = useRouter();

    const handleSignup = async() => {
        try {
            const res = await axios.post('http://localhost:8000/api/register/', {
                "username": username,
                "password": password
            });

            const {message} = res.data;
            console.log('Signup Successful:', message);
            router.push('/auth/dashboard');

        } catch(err){
            console.error('Login Failed:', err);
        }
    }

    const handleGoogleSignup = () => {
        router.push('http://localhost:8000/accounts/google/login');
    }

    return(
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
                    Username
                </label>
                <div className="mt-2">
                    <input
                    id="username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
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
                    type="button"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSignup}
                >
                    Sign Up with Email
                </button>
                
                </div>
            </form>
            <button
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={handleGoogleSignup}
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
}
