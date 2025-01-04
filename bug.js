function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is wrong! Should be undefined or throw an error
  }
  return a / b; 
}