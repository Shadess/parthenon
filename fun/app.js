#!/usr/bine/node
const currency = require("currency.js");
const fs = require("fs");

const CAT_OF_INTEREST = "Shopping";

const categories = {};

function parseTransaction(transactions) {
  transactions.map((t) => {
    if (!categories.hasOwnProperty(t.category)) {
      categories[t.category] = {
        maxItemValue: 0,
        name: t.category,
        numItems: 0,
        totalValue: 0,
      };
    }

    categories[t.category].numItems += 1;
    categories[t.category].totalValue += t.ammount;
    if (t.ammount > categories[t.category].maxItemValue) {
      categories[t.category].maxItemValue = t.ammount;
    }
  });
}

function analyzeCategories() {
  let maxCat = null;
  for (const [key, value] of Object.entries(categories)) {
    if (!maxCat || value.totalValue > maxCat.totalValue) {
      maxCat = value;
    }
  }

  if (maxCat.name === CAT_OF_INTEREST) {
    return `Your category of interest: ${CAT_OF_INTEREST} is already what you spend the most on. Keep it up! Treat yourself.`;
  } else {
    const interestCat = categories[CAT_OF_INTEREST];
    const difference = currency(maxCat.totalValue, { fromCents: true })
      .subtract(interestCat.totalValue)
      .format();
    const maxCatAvgItem = currency(maxCat.totalValue, { fromCents: true })
      .divide(maxCat.numItems)
      .format();
    const prefCatAvgItem = currency(interestCat.totalValue, {
      fromCents: true,
    }).divide(interestCat.numItems);

    const maxCatMaxItemValue = currency(maxCat.maxItemValue, {
      fromCents: true,
    });
    const numSwitchCategories =
      maxCatMaxItemValue.intValue / prefCatAvgItem.intValue;

    const line1 = `You are currently spending ${difference} more on ${maxCat.name} than your preferred category of ${interestCat.name}.\n`;
    const line2 = `The average you are spending on ${maxCat.name} is ${maxCatAvgItem} per item.\n`;
    const line3 = `The average you are spending on ${
      interestCat.name
    } is ${prefCatAvgItem.format()} per item.\n`;
    const line4 = `If you were to cut back on your most expensive ${
      maxCat.name
    } purchase, which was ${maxCatMaxItemValue.format()}, you could instead do ${Math.floor(
      numSwitchCategories
    )} average ${interestCat.name} sprees.\n`;
    return line1 + line2 + line3 + line4 + "Treat yo'self!";
  }
}

function main() {
  const data = fs.readFileSync("./transactions.json");
  const json = JSON.parse(data);

  parseTransaction(json.transactions);
  const analysis = analyzeCategories();
  console.log(analysis);
}
main();
