import { RingLoader, HashLoader } from "react-spinners";

const LoadingSpinnerFull = ({ loading }) => {
    return (
        <div className={`flex justify-center  bg-gray-300 dark:bg-gray-900 items-center h-screen ${loading ? "block" : "hidden"}`}>
            <HashLoader color="#36D7B7" loading={loading} size={100} />
        </div>
    )
}

export default LoadingSpinnerFull;