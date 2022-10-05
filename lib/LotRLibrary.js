import axios from "axios";
import LotRLibraryError from "./LotRLibraryError.js";

export const BASE_URL = 'https://the-one-api.dev/v2';

export class LotRLibrary {
    /**
     * A handfull SDK for interacting with the Lord of the Rings API
     * Class might be instantiated with or without an Auth token 
     * Non Auth calls are available only to get books
     */
    constructor(token = null) {
        this.token = token;
    }

    /******START BOOKS*******/
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
    * Returns the Lord of the Rings book with the specified name
    * @param name - the name of the book
    * If the call is made with a string containing multiple names separated by commas, the method will return all the matching books
    */
    async getBooksByName(name) {

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
    * Returns Lord of the Rings books whose parameter match the expression
    * @param regexp - the regex expression - make sure you add the name of the parameter as well (e.g. name=/foot/i)
    */
    async getBooksByRegex(regexp) {

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
    /******END BOOKS*******/

    /******START CHAPTERS*******/
    /**
    * Returns all the Lord of the Rings chapters of all the books.
    */
    async getChapters() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/chapter`;

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

    /**
    * Returns one the Lord of the Rings book chapeters with the specified id
    * @param id - the id of the book
    */
    async getChapterById(id) {


        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }

        const route = `/chapter/${id}`;

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

    /**
    * Returns the Lord of the Rings chapter with the specified name
    * @param name - the name of the chapter
    * If the call is made with a string containing multiple names separated by commas, the method will return all the matching chapters
    */
    async getChaptersByName(name) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/chapter?name=${name}`;

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

    /**
    * Returns the Lord of the Rings chapters from the specified book with the id
    * @param id - the id of the book
    */
    async getChaptersByBookId(id) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }

        const route = `/book/${id}/chapeter`;

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

    /**
    * Returns the Lord of the Rings chapters from the specified book
    * @param name - the name of the book
    */
    async getChaptersByBookName(name) {

        const bookObject = await this.getBooksByName(name);
        const bookId = bookObject?.docs[0]?._id;
        return await this.getChaptersByBookId(bookId);
    }
    /******END CHAPTERS*******/




    /******START MOVIES*******/
    /**
     * Returns all the Lord of the Rings movies.
     */
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

    /**
    * Returns one of the Lord of the Rings movie with the specified id
    * @param id - the id of the book
    */
    async getMovieById(id) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie/${id}`;

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

    /**
    * Returns the Lord of the Rings movies with the specified name
    * @param name - the name(s) of the movie
    * If the call is made with a string containing multiple names separated by commas, the method will return all the matching books
    */
    async getMoviesByName(name) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie?name=${name}`;

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

    /**
     * Returns the Lord of the Rings movies with the minimum specified budget
     * @param minBudget - the min budget - numeric in millions
     */
    async getMoviesByMinBudget(minBudget) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie?budgetInMillions>=${minBudget}`;

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

    /**
    * Returns the Lord of the Rings movies with the maximum specified budget
    * @param maxBudget - the max budget - numeric in millions
    */
    async getMoviesByMaxBudget(maxBudget) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie?budgetInMillions<=${maxBudget}`;

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

    /**
     * Returns the Lord of the Rings movies with the minimum rotten tomatoes score
     * @param minScore - the score - numeric
     */
    async getMoviesByMinRTScore(minScore) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie?rottenTomatoesScore>=${minScore}`;

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

    /**
    * Returns Lord of the Rings movies whose parameter match the expression
    * @param regexp - the regex expression - make sure you add the name of the parameter as well (e.g. name=/foot/i)
    */
    async getMoviesByRegex(regexp) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie?${regexp}`;

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
    /******END MOVIES*******/



    /******START QUOTES*******/
    /**
     * Returns all the Lord of the Rings movie quotes.
     */
    async getQuotes() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/quote`;

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

    /**
    * Returns one of the Lord of the Rings movie quote with the specified id
    * @param id - the id of the quote
    */
    async getQuoteById(id) {

        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/quote/${id}`;

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

    /**
    * Returns Lord of the Rings movie quotes that include the phrase 
    * @param phrase - the matching phrase
    */
    async getQuoteByContent(phrase) {

        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/quote/?dialog=/${phrase}/`;

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

    /**
    * Returns Lord of the Rings movie quotes found in the movie with the specified id
    * @param id - the movie id
    */
    async getQuotesByMovieId(id) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/movie/${id}/quote`;

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

    /**
    * Returns Lord of the Rings movie quotes found in the movie with the specified name
    * @param name - the movie name
    */
    async getQuotesByMovieName(name) {
        const movieObject = await this.getMoviesByName(name)
        const movieId = movieObject?.docs[0]?._id;

        return await this.getQuotesByMovieId(movieId)
    }

    /**
    * Returns Lord of the Rings movie quotes said by the character with the specified id
    * @param id - the character id
    */
    async getQuotesByCharacterId(id) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }

        const route = `/character/${id}/quote`;

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

    /**
    * Returns Lord of the Rings movie quotes said by the character with the specified id
    * @param id - the character id
    */
    async getQuotesByCharacterName(name) {
        const characterObject = await this.getCharacterByName(name);
        const characterId = characterObject?.docs[0]?._id;
        return await this.getQuotesByCharacterId(characterId);
    }
    /******END QUOTES*******/

    /******START CHARACTERS*******/
    async getCharacters() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/character`;

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
    async getCharactersByGender(gender) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/character?gender=${gender}`;

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
    async getCharactersSorted(sortType) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/character?sort=name:${sortType}`;

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
    async getCharacterById(id) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/character/${id}`;

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
    async getCharacterByName(name) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/character?name=${name}`;

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
    async getCharacterByRegexp(regexp) {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
        const route = `/character?${regexp}`;

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
    /******END CHARACTERS*******/


}


