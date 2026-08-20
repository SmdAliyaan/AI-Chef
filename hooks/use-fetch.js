import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
    const [data, setData] = useFormState(undefined);
    const [loading, setLoading] = useState(false);
    cosnt [error, setError] = useState(null);

    const fn = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const response = await cb(...args);
            setData(response);
            setError(null);
        } catch (error) {
            setError(error);
            toast.error("An error occurred while fetching data.");
        }
    };

    return { data, loading, error, fn ,setData };
};

export default useFetch;