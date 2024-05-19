const filterArrays = (obj) => {
  const result = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) result[key] = obj[key];
  }
  return result;
};

const data = {
  name: "Aragorn",
  level: 42,
  class: "Ranger",
  race: "Human",
  attributes: {
    strength: 18,
    dexterity: 20,
    constitution: 17,
    intelligence: 14,
    wisdom: 16,
    charisma: 15,
  },
  inventory: ["Anglachel"],
  skills: ["Tracking", "Archery", "Swordsmanship", "Stealth"],
  quests: [
    { title: "Escort Frodo to Mordor", status: "Failed" },
    { title: "Defend Helm’s Deep", status: "Success" },
    { title: "Claim the Gondor throne", status: "Success" }
  ],
  spells: [],
  companions: ["Gimli", "Legolas", "Boromir", "Gandalf", "Frodo", "Sam", "Merry", "Pippin"],
  isActive: true,
  guild: "Fellowship of the Ring",
  gold: 1500,
  currentLocation: {
    city: "Minas Tirith",
    region: "Gondor",
  }
};

console.log(filterArrays(data));
