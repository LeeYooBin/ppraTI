const combineInventories = (inventory1, inventory2) => {
  const combinedInventory = {};

  for (const item in inventory1) {
    combinedInventory[item] = inventory1[item];
  }

  for (const item in inventory2) {
    if (combinedInventory[item]) {
      combinedInventory[item] += inventory2[item];
    } else {
      combinedInventory[item] = inventory2[item];
    }
  }

  return combinedInventory;
};

const storeInventoryA = {
  "item1": 10,
  "item2": 20,
  "item3": 30
};

const storeInventoryB = {
  "item2": 15,
  "item3": 25,
  "item4": 35
};

console.log(combineInventories(storeInventoryA, storeInventoryB));
