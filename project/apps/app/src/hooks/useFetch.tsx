import axios from "axios";
import { useEffect, useState } from "react";


interface Pokemon {
    name: string;
    url: string;
};

export default function useFetch(url: string) {
    const [data, setData] = useState<Pokemon[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        async function getPokemonData() {
            try {
                const response = await axios(url);
                setIsLoading(false);
                setData(response.data?.results);
            } catch (err: any) {
                setIsLoading(false);
                setError(err?.message);
            } finally {
                setIsLoading(false)
            }
        }
        getPokemonData();
    }, [url]);

    return [data, error, isLoading];
}