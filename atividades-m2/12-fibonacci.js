const fib = (n) => {
  if (n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

const fibSeq = [];

for (let i = 0; i < 10; i++) fibSeq.push(fib(i));

console.log(`10 primeiros números da sequência de Fibonacci: ${fibSeq}.`);