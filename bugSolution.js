function foo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // or return undefined;
  }
  return a / b; 
}