# SDK Design

## General

The JS LotR SDK uses a minimum amount of external dependecies in order to provide a seamless developer experience to interact with the API.
They are the following:

- assert - used for the testing script, to ensure the results of the calls are the expected ones
- axios - used for the making the https get requests to the api endpoints
- dotenv - used for making project env variables available across different modes (dev, testing, etc.)
- mocha - used for testing the SDK

The code is wrapped around a class with a single constructor. As the API allows both authenticated and unauthenticated calls, the token paramenter of this constructor is declared as optional.
As every method from the class is responsable for making one or more GET requests, they are all async. So, when they are called, they need to be awaited in order to obtain the result.

## Methods

The SDK exposes 30 different methods. Some of them include multiple API calls, or RegExp filtering. Below, there is a list of them, along with the parameters that were succesfully tested with.

```
getBooks()
getBookById("5cf5805fb53e011a64671582")
getBooksByName("The Fellowship Of The Ring")
getBooksByRegex("name=/The/")
getChapters()
getChapterById("6091b6d6d58360f988133bc7")
getChaptersByBookId("5cf58080b53e011a64671584")
getChaptersByBookName("The Fellowship Of The Ring")
getChaptersByName("The Great River")
getMovies()
getMovieById("5cd95395de30eff6ebccde5c")
getMoviesByName("The Return of the King")
getMoviesByMaxBudget(200)
getMoviesByMinBudget(100)
getMoviesByMinRTScore(91)
getMoviesByRegex("name=/Series/")
getCharacters()
getCharacterById("5cd99d4bde30eff6ebccfe2e")
getCharactersByName("Bard")
getCharactersByGender("Male")
getCharacterByRegexp("name=/A/")
getCharactersSorted("asc")
getQuotes()
getQuoteById("5cd96e05de30eff6ebcce84c")
getQuoteByPhrase("didn't think it")
getQuotesByCharacterId("5cd99d4bde30eff6ebccfe2e")
getQuotesByCharacterName("Peregrin Took")
getQuotesByMovieId("5cd95395de30eff6ebccde5c")
getQuotesByMovieName("The Fellowship of the Ring")
```

## Error Handling

In order to avoid unhandled errors at all costs, a the `LotRLibraryError` class was created and it extends the default error class. Furthermore, for each call, there are two possible cases which might lead to an error:

1. The request didn't make it to the server(e.g. No internet connection) -----> In this case the SDK throws an error with an unknown status
2. The request did make it to the server(e.g. Unauthorized call) -----> In this case the SDK throws an error with a status and a message from the server

## Testing

As it was mentioned above, for the testing of the SDK, the mocha module was used. The performed tests include the following:

- URL is not null
- The /book endpoint gets called and the returned value is as expected
- 401 gets propperly handled
- The /movie endpoint gets called and the returned value is as expected
- The /character endpoint gets called and the returned value is as expected
- The /chapter endpoint gets called and the returned value is as expected
- The /quote endpoint gets called and the returned value is as expected

## File Structure

```
georgeflutur-sdk
│   README.md
│   design.md
│   index.js -----> this is the entrypoint
│   ...
│
└───lib
│   │   LotRLibrary.js -----> the class holding the actual SDK
│   │   LotRLibraryError.js -----> the custom error class
│
└───test
    │   test.js -----> testing script
```
