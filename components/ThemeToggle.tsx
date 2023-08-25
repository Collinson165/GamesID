import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            className='relative rounded-full w-12 h-6 p-1 flex items-center justify-center bg-gray-200 dark:bg-gray-900'
            onClick={toggleTheme}
        >
            {/* {theme === 'light' ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-gray-700 dark:text-gray-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                </svg>
                    
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-gray-700 dark:text-gray-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor' 
                >
                </svg>
            )} */}

            <div
                className={`absolute left-1 ${
                    theme === 'light' ? 'translate-x-0': 'translate-x-6'
                } transition-transform duration-300 ease-in-out bg-white dark:bg-gray-700 w-4 h-4 rounded-full` }
            />
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`h-4 w-4 text-gray-700 dark:text-gray-300 transition-colors duration-300 ease-in-out ${
                    theme === 'light' ? 'ml-0': 'ml-6'
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >

            </svg>

        </button>
    );
};

export default ThemeToggle;