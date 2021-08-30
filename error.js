// this...
const x = Error('I was created using a function call!')
// ...has the same functionality as this.
const y = new Error('I was constructed via the "new" keyword!')

// Throwing an generic error
try {
    throw new Error('Whoops!')
} catch (e) {
    console.error(e.name + ': ' + e.message)
}

// Handling a specific error
try {
    foo.bar()
} catch (e) {
    if (e instanceof EvalError) {
        console.error(e.name + ': ' + e.message)
    } else if (e instanceof RangeError) {
        console.error(e.name + ': ' + e.message)
    }
    // ... etc

    else {
        // If none of our cases matched leave the Error unhandled
        throw e;
    }
}
