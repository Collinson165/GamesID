import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login(){
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const router = useRouter();

    const handleLogin = async() => {
        try {
            const res = await axios.post('http://localhost:8000/api/token/', {
                username: username,
                password: password
            });

            const {access, refresh} = res.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            router.push('/auth/dashboard');
        } catch(err){
            console.error('Login Failed:', err);
        }
    }

    const handleGoogleLogin = () => {
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
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-300 dark:bg-gray-800">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-32 w-auto"
                src="gameid.png"
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  method="POST">
                <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <div className="mt-2">
                    <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="button"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleLogin}
                >
                    Sign in with Username
                </button>
                
                </div>
            </form>
            <button
                className="flex w-full justify-center rounded-md bg-red-600 px-3 my-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={handleGoogleLogin}
            >
                Sign in with Google
            </button>

            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member yet?{' '}
                <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign Up
                </Link>
            </p>
            </div>
        </div>
        </>
    )
}