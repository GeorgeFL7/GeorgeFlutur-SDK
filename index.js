import axios from "axios";


class LotRLibrary {
    constructor(token = null) {
        this.token = token;
    }
    async getBooks() {
        let response = await axios.get('https://the-one-api.dev/v2/book')
            .catch(function (error) {
                console.log(error)
            });
        return response?.data;
    }
}

const lotrlib = new LotRLibrary()
console.log(await lotrlib.getBooks());

