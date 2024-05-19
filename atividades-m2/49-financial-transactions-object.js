const categorizeTransactions = (data) => {
  const categories = {};

  data.forEach(transaction => {
    const { category, value } = transaction;

    if (categories[category]) {
      categories[category].transactions.push(transaction);
      categories[category].subtotal += value;
    } 
    else {
      categories[category] = {
        transactions: [transaction],
        subtotal: value
      };
    }
  });

  return categories;
};

const transactions = [
  { id: 1, value: 100, date: "2024-05-01", category: "category1" },
  { id: 2, value: 50, date: "2024-05-02", category: "category2" },
  { id: 3, value: 200, date: "2024-05-03", category: "category1" },
  { id: 4, value: 150, date: "2024-05-04", category: "category2" },
  { id: 5, value: 80, date: "2024-05-05", category: "category3" }
];

const categorized = categorizeTransactions(transactions);
console.dir(categorized, { depth: null });
