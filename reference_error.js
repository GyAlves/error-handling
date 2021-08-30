// Catching a reference error
try {
    let a = undefinedVariable
} catch (error) {
    console.log(error instanceof ReferenceError)  // true
    console.log(error.message)                    // "undefinedVariable is not defined"
    cl                // "ReferenceError"
    console.log(error.fileName)                   // "Scratchpad/1"
    console.log(error.lineNumber)                 // 2
    console.log(error.columnNumber)               // 6
    console.log(error.stack)
}

// Creating a reference error 

try {
    throw new ReferenceError('Hello', 'someFile.js', 10)
} catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "Hello"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "someFile.js"
    console.log(e.lineNumber)                 // 10
    console.log(e.columnNumber)               // 0
    console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
}