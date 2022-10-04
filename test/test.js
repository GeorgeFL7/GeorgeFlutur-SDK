import assert from "assert";
import { LotRLibrary, BASE_URL } from "../lib/LotRLibrary.js"


describe('The LotR SDK shold ', function () {
    it('have a defined URL', function () {
        assert.notEqual('undefined', BASE_URL);
    })

})