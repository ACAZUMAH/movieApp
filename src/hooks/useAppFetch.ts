import { useEffect, useState } from "react";

/**
 * @description A custom hook for fetching data with loading and error states.
 * @param fetchFunction - A function that returns a promise to fetch data
 * @param autoFetch - Whether to automatically fetch data on mount (default: true)
 * @returns An object containing data, loading, error, refetch function, and reset function
 */
export const useAppFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();

            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An unknown error occurred"));
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
}