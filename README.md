![LOTR-ultrawide-1440-16x9-1-1024x429](https://user-images.githubusercontent.com/77577235/194053834-26a89815-ae4d-40d5-a7bc-a4975ab922ce.jpg)

# Lord of the Rings JavaScript SDK

This handfull JS library was created to help developers interact with the LotR API.

Details about the endpoints, API keys generation, etc. can be found [here](http://the-one-api.dev)

In order to easily get started with the library follow these steps:

1. Install it using npm.
```
npm i georgeflutur-sdk
```

2. Import it in your file.
```
import LotRLibrary from "georgeflutur-sdk"
```

3. Create an instance of the communicator class.
```
const lortlib = new LotRLibrary("YOUR_API_KEY")
```

4. Call the ```getMovies``` method to grab an object containing all the LotR books.
```
console.log(await sdk.getMovies())
```


*“May it be a light to you in dark places, when all other lights go out.” — Galadriel*

