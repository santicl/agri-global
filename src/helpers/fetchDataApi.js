import { settings } from "../settings";


export const fetchDataApi = async (url) => {
    url = settings.apiURL;
    const response = await fetch(url);
    const data = await response.json();

    return data.products;
}