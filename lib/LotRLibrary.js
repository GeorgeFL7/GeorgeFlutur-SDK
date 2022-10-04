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

    /******BOOKS*******/

    /**
     * Returns all the Lord of the Rings books.
     */
    async getBooks() {

        const route = `/book`;

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
    /**
    * Returns one the Lord of the Rings book with the specified id
    * @param id - the id of the book
    */
    async getBookById(id) {

        const route = `/book/${id}`;

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

    /**
    * Returns one the Lord of the Rings book with the specified name
    * @param name - the name of the book
    */
    async getBookByName(name) {

        const route = `/book?name=${name}`;

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
    /**
    * Returns one the Lord of the Rings books whose name match the expression
    * @param regexp - the regex expression
    */
    async getBookByRegex(regexp) {

        const route = `/book?${regexp}`;

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



    /******MOVIES*******/

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
    async getMovieById(id) {

        const route = `/movie/${id}`;

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
    async getMovieByName(name) {

        const route = `/movie?name=${name}`;

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
    async getMoviesByMinBudget(minBudget) {

        const route = `/movie?budgetInMillions>=${minBudget}`;

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
    async getMoviesByMaxBudget(maxBudget) {

        const route = `/movie?budgetInMillions<=${minBudget}`;

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
    async getMoviesByRegex(regexp) {

        const route = `/movie?${regexp}`;

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

    /******QUOTES*******/
    async getQuotesByMovieId(id) {

        const route = `/movie/${id}/quote`;

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

    /******CHARACTERS*******/



}


