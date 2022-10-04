import axios from "axios";
import LotRLibraryError from "./LotRLibraryError.js";

export const BASE_URL = 'https://the-one-api.dev/v2';

export class LotRLibrary {
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

        const route = '/book';

        let response = await axios.get(BASE_URL + route)
            .catch(function (error) {
                if (error.response) {

                    /** The server responded, but an error occured */
                    throw new LotRLibraryError(error.response.status, error.response.data.message ? error.response.data.message : error.response.data);
                }
                else {
                    throw new LotRLibraryError('unknown', error.message);
                }
            })

        return response.data
    }


    async getMovies(name) {
        const route = `/movie`;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }

        let response = await axios.get(BASE_URL + route, config)
            .catch(function (error) {
                if (error.response) {

                    /** The server responded, but an error occured */
                    throw new LotRLibraryError(error.response.status, error.response.data.message ? error.response.data.message : error.response.data);
                }
                else {
                    throw new LotRLibraryError('unknown', error.message);
                }
            })

        return response.data
    }

}


