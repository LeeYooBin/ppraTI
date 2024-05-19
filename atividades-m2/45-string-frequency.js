const generateObjectWithStringFrequency = (arr) => {
  const frequencyObject = {};
  arr.forEach((str) => {
    frequencyObject[str] = (frequencyObject[str] || 0) + 1;
  });
  return frequencyObject;
};

const array = ["str1", "str2", "str1", "str3", "str2", "str1"];

console.log(generateObjectWithStringFrequency(array));
