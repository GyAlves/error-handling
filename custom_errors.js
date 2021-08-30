class CustomError extends Error {
    constructor(message, statusCode = 400) {
        super(message, statusCode)

        this.name = "Custom Error";
        this.message = message;
        this.statusCode = statusCode;
    }


}

try {
    throw new CustomError('Error throwing !', 404)
} catch (e) {
    console.error(e.name)    //CustomError
    console.error(e.message)     //baz
    console.error(e.statusCode) //bazMessage
    console.error(e.stack)   //stacktrace
}