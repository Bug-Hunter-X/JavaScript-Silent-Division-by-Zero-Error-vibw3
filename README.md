# JavaScript Silent Division by Zero Error

This repository demonstrates a common, yet subtle, error in JavaScript: silently returning 0 when division by zero is attempted.  The code in `bug.js` demonstrates the faulty implementation.  The corrected version is available in `bugSolution.js`.

The error is 'silent' because it does not throw an exception, making debugging more challenging.  A more robust solution would either explicitly throw an error or return `undefined` to indicate the invalid operation.