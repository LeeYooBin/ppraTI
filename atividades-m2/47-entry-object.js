const objMap = (obj, func) => {
  const result = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = func(obj[key]);
    }
  }

  return result;
};

const doubleValue = (value) => value * 2;

const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(objMap(obj, doubleValue));
