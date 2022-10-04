import axios from "axios";

let response = await axios.get('https://the-one-api.dev/v2/book')
    .catch(function (error) {
        console.log(error)
    });
console.log(response.data);