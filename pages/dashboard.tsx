import { withAuth } from "../hocs/withAuth";

const dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-800">
            <header className="bg-gray-400 dark:bg-gray-900 shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Dashboard</h1>
            </div>
            </header>
            <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                
            </div>
            </main>
        </div>
    )
}

export default withAuth(dashboard);