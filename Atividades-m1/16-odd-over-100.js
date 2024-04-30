const isOdd = (num) => {
  let aux = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) aux += 1;
  }

  return aux === 0;
}

let count = 0;
let num = 101;

while (count < 50) {
  if (isOdd(num)) {
    console.log(`${count + 1}° - ${num}`);
    count += 1;
  }
  num += 1;
}

