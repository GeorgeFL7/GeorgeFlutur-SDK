import axios from "axios";

const BASE_URL = 'https://the-one-api.dev/v2';

export default class LotRLibrary {
    /**
     * Class might be instantiated with or without an Auth token 
     * Non Auth calls are available only on '/book' endpoint  
     */
    constructor(token = null) {
        this.token = token;
    }

    /**
     * Returns all the Lord of the Rings books.
     */
    async getBooks() {

        const endpoint = `/book`

        let response = await axios.get(BASE_URL + endpoint)
            .catch(function (error) {
                console.log(error)
            });
        return response?.data;
    }
}


