export default class LotRLibraryError extends Error {
    constructor(status, message) {
        super(message)
        this.status = status;
        this.name = 'LotRLibraryError'
    }

}