function fibonacci(qt, fib) {
  fib = fib ?? [0, 1]
  if (qt < 3) return fib.splice(0, qt)
  if (fib.length === qt) return fib
  fib.push(fib[fib.length - 2] + fib[fib.length - 1])
  return fibonacci(qt, fib)
}

console.log(fibonacci(5))
