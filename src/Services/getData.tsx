import axios from "axios";

const fetchItems = async (url: string) => {
    return await axios.get(url);
}


export default fetchItems;