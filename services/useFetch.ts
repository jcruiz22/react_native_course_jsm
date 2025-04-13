import { useState, useEffect } from "react";

const useFetch = <T, R = T>(
    fetchFunction: () => Promise<T>,
    options:{
        autoFetch?: boolean;
        transform?: (data: T) => R;
    }={}
) => {
    const { autoFetch = true, transform } = options;
    // State to hold the data, loading status, and error message
    // The generic type T is used to define the shape of the data being fetched
    // The generic type R is used to define the shape of the transformed data
    const [data, setData] = useState<R | T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            // If a transform function is provided, use it to transform the data
            if (transform) {
                setData(transform(result));
            }else {
                setData(result);
            }
        } catch (err) {
            // Handle any errors that occur during the fetch
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            // Set loading to false after the fetch is complete
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