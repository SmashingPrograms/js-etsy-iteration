console.log("1. Show me how to calculate the average price of all items. Please console.log the average.");

const sumOfPrices = items.reduce(function(total, item) {
  return total + item.price;
}, 0);

const averageOfPrices = sumOfPrices / items.length;

console.log(averageOfPrices);

console.log("2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.");

const filterPrices = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18 && item["currency_code"] === 'USD';
});

console.log(filterPrices);

console.log("3. Show me how find the item with a \"GBP\" currency code and print its name and price. Please console.log the one you find.");

const GBPItem = items.map(function(item) {
  (item.currency_code === 'GBP') ? console.log(`${item.title} costs £${item.price}`) : false;
});

console.log("4. Show me how to find which items are made of wood. Please console.log the ones you find.");

const woodItems = items.filter(function(item) {
  return item.materials.includes('wood');
});

console.log(woodItems);

console.log("5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.");

const eightOrMore = items.filter(function(item) {
  return item.materials.length >= 8;
});

console.log(eightOrMore);

console.log("6. Show me how to calculate how many items were made by their sellers. Please console.log your answer.");

const madeBySellers = items.filter(function(item) {
  return item.who_made === 'i_did';
});

console.log(`${madeBySellers.length} were made by their sellers.`);