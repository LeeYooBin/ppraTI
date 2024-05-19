const summarizeSales = (sales) => {
  const summary = {};

  sales.forEach(sale => {
    const seller = sale.seller;
    const value = sale.value;

    if (summary[seller]) summary[seller] += value;
    else summary[seller] = value;
  });

  return summary;
};

const sales = [
  { seller: "Vendedor 1", value: 100 },
  { seller: "Vendedor 2", value: 200 },
  { seller: "Vendedor 3", value: 150 },
  { seller: "Vendedor 4", value: 300 },
  { seller: "Vendedor 5", value: 250 }
];

console.log(summarizeSales(sales));
