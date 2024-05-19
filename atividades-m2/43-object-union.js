const obj1 = {
  name: "Alice",
  age: 25,
  location: "Wonderland",
  skills: ["fighting", "strategy"]
};

const obj2 = {
  age: 30,
  occupation: "Warrior",
  skills: ["archery", "swordsmanship"]
};

const newObject = { ...obj1, ...obj2 }

console.log(newObject);
