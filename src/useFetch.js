import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true);

    console.log('useFetch ran')
    useEffect(() => {
        const abortCont = new AbortController();
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) throw Error('could not fetch the data');
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                })
                .catch(err => {
                    if (err.name !== 'AbortError') {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        return () => abortCont.abort();
    }, [url])

    return { data, error, isPending };
}

export default useFetch;