import assert from "assert";
import { LotRLibrary, BASE_URL } from "../lib/LotRLibrary.js"

import dotenv from "dotenv"
dotenv.config()

describe('The LotR SDK should ', function () {
    let lotrlib = new LotRLibrary()
    it('have a defined URL', function () {
        assert.notEqual('undefined', BASE_URL);
    })

    it('return 3 books on the /book endpoint', async function () {
        const booksObject = await lotrlib.getBooks();
        assert.equal(3, booksObject.total);
    })

    it('throw a 401 error if an unauthorized call is made', async function () {
        let errorCaptured = false
        const characterObject = await lotrlib.getCharacters().catch(function (error) {
            if (error?.status == 401)
                errorCaptured = true;
        }
        );
        assert.equal(true, errorCaptured);
    })

    it('return 8 movies on the /movie endpoint', async function () {
        lotrlib = new LotRLibrary(process.env.LOTR_API_KEY)
        const moviesObject = await lotrlib.getMovies();
        assert.equal(8, moviesObject.total);
    })
    it('return 933 characters on the /character endpoint', async function () {
        const characterObject = await lotrlib.getCharacters();
        assert.equal(933, characterObject.total);
    })

    it('return 62 chapters on the /chapter endpoint', async function () {
        const chaptersObject = await lotrlib.getChapters();
        assert.equal(62, chaptersObject.total);
    })

    it('return 2390 quotes on the /quote endpoint', async function () {
        const quotesObject = await lotrlib.getQuotes();
        assert.equal(2390, quotesObject.total);
    })


})