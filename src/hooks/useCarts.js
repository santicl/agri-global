import { useState, useEffect } from "react";
import { fetchDataApi } from "../helpers/fetchDataApi";

export const useCarts = () => {
    const [ isLoading, setisLoading ] = useState(true);
    const [ carts, setCarts ] = useState([]);

    useEffect(() => {
        fetchDataApi()
           .then( carts => {
                setCarts(carts);
                setisLoading(false);
           })
    }, []);

    return { isLoading, carts };

}