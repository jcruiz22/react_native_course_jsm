import { useState, useEffect } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };
    
    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    // Use useEffect to run the fetch after component mounts
    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []); // Empty dependency array means this runs once on mount

    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;