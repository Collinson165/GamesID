import { withAuth } from "../hocs/withAuth";
import Image from "next/image";

const account = (props) => {
    const { user } = props;
    
    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-800">
            <header className="bg-gray-400 dark:bg-gray-900 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Profile</h1>
            </div>
            </header>
            <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {/* {user && <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />} */}
                {user && <Image alt="" src={user.photoURL} width="150" height="150" className="rounded-full" />}  
            </div>
            </main>
        </div>
    )
}

export default withAuth(account);