function fibonacci(n) {
  const fib = [0, 1]
  if (n < 3) return fib.splice(0, n)
  for (let i = 0; i < n; i++) {
    const l = fib.length - 1
    fib.push(fib[l] + fib[l - 1])
  }

  return fib
}

console.log(fibonacci(15))
