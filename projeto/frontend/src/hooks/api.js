import axios from 'axios';
import {useCallback, useState} from "react";

const apiClient = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

const useApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (method, url, body = null) => {
        setLoading(true);
        setError(null);
        try {
            const config = body ? [url, body] : [url];
            const response = await apiClient[method](...config);
            setData(response.data);
            setLoading(false);
            return response.data;
        } catch (err) {
            const errorData = err.response ? err.response.data : { message: err.message };
            setError(errorData);
            setLoading(false);
            throw err;
        }
    }, []);

    const get = useCallback((url) => request('get', url), [request]);
    const post = useCallback((url, body) => request('post', url, body), [request]);
    const put = useCallback((url, body) => request('put', url, body), [request]);
    const del = useCallback((url) => request('delete', url), [request]);

    return { data, error, loading, get, post, put, del };
};

export default useApi;