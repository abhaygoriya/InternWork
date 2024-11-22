const unitValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  ONE_HUNDRED: 100,
};

const changeValue = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const keys = Object.keys(unitValue);
keys.reverse();

const userPurchaseAmt = 3.26;
const userGivenAmt = 100;
let totalAmt = 0;
function totalAmount() {
  for (const element of changeValue) {
    totalAmt += element[1];
  }
}

function giveMeSomeChange() {
  let amtDiff = userGivenAmt - userPurchaseAmt;
  totalAmount();
  if (amtDiff > totalAmt) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (amtDiff == totalAmt) {
    return {
      status: "CLOSED",
      change: changeValue.filter((ele) => ele[1] != 0),
    };
  }
  let flag = true;
  let returnChange = [];
  for (const element of keys) {
    if (unitValue[element] <= amtDiff) {
      const coinCount = findChangeUnit(element, amtDiff);
      if (coinCount > 0) {
        const removeValue = coinCount * unitValue[element];
        // console.log("amtDiff", amtDiff);
        amtDiff -= removeValue;

        amtDiff = amtDiff.toFixed(2);
        returnChange.push([element, removeValue]);
      }
      continue;
    }
  }
  console.log(returnChange);
  // }
  if (amtDiff == 0) {
    return { status: "Opened", change: returnChange };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

function findChangeUnit(element, amtDiff) {
  const coinIndex = changeValue.findIndex((change) => change[0] == element);
  const coinChange = changeValue[coinIndex][1];
  let coinCount;
  if (amtDiff >= coinChange) {
    coinCount = coinChange / unitValue[element];
  } else {
    coinCount = Math.floor(amtDiff / unitValue[element]);
  }
  //   console.log(element, coinCount);
  changeValue[coinIndex][1] -= coinCount * unitValue[element];
  return coinCount;
}

const returnChange = giveMeSomeChange();
console.log(returnChange);
