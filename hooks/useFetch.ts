import { useState, useEffect, useCallback } from "react";
import axios, { AxiosResponse } from 'axios';

interface useFetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

const useFetch = <T>(url: string): useFetchState<T> => {
    const [data, setData ] = useState<T | null>(null);
    const [loading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null)

    const fetchData = useCallback(async () => {
        try {
            const response: AxiosResponse<T> = await axios.get(url);
            setData(response.data);
        }catch(err: any){
            setError(err);
        }finally {
            setIsLoading(false);
        }

    }, [url])

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response: AxiosResponse<T> = await axios.get(url);
        //         setData(response.data);
        //     }catch(err: any){
        //         setError(err);
        //     }finally {
        //         setIsLoading(false);
        //     }
        // };

        fetchData();

        return () => {
            console.log('Cleaning up fetch')
        }
    }, [fetchData]);

    return { data, loading, error };

}

export default useFetch;