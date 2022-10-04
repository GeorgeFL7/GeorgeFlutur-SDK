import assert from "assert";
import { LotRLibrary, BASE_URL } from "../lib/LotRLibrary.js"
import dotenv from "dotenv"
dotenv.config()
describe('The LotR SDK should ', function () {
    const lotrlib = new LotRLibrary(process.env.LOTR_API_KEY)
    it('have a defined URL', function () {
        assert.notEqual('undefined', BASE_URL);
    })

    it('return 3 books on the /book endpoint', async function () {
        const booksObject = await lotrlib.getBooks();
        assert.equal(3, booksObject.total);
    })
    it('return 8 movies on the /movie endpoint', async function () {
        const booksObject = await lotrlib.getMovies();
        assert.equal(8, booksObject.total);
    })


})