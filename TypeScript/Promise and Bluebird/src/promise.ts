function main(choice: string) {
  executeChoice(choice);
}

function executeChoice(choice: string) {
  switch (choice) {
    case "series":
      seriesCall();
      break;

    case "parallel":
      parallelCall();
      break;

    case "waterfall":
      waterfallCall();
      break;

    case "each":
      eachCall();
      break;

    default:
      console.error("Invalid choice");
      break;
  }
}

async function seriesCall() {
  Promise.all([
    await task(1, Math.floor(1 * 1000)),
    await task(2, Math.floor(5 * 1000)),
    await task(3, Math.floor(3 * 1000)),
  ]).then((_) => console.log("final"));
}

function eachCall() {
  const arr = [
    {
      order: 1,
      delay: 1000,
    },
    {
      order: 2,
      delay: 750,
    },
    {
      order: 3,
      delay: 650,
    },
  ];

  const promiseArr: Promise<any>[] = [];
  for (const ele of arr) {
    promiseArr.push(task(ele.order, ele.delay));
  }
  Promise.all(promiseArr).then((_) => console.log("Finished"));
}

function parallelCall() {
  Promise.all([
    task(1, Math.floor(Math.random() * 1000)),
    task(2, Math.floor(Math.random() * 1000)),
    task(3, Math.floor(Math.random() * 1000)),
  ]).then((_) => console.log("Finished"));
}

function addToTotal(total: number, add: number): Promise<number> {
  return new Promise((resolve, reject) => {
    let newTotal = total + add;
    console.log(`${total} + ${add} = ${newTotal}`);
    resolve(newTotal);
  });
}

async function waterfallCall() {
  let newTotal: number;
  newTotal = await addToTotal(0, 5);
  newTotal = await addToTotal(newTotal, 2);
  newTotal = await addToTotal(newTotal, 3);
  console.log(newTotal);
  console.log("Finished");
}

function task(order: number, delay: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(function () {
      console.log(`Order ${order} and delay ${delay}`);
      resolve();
    }, delay);
  });
}

const choice: string = prompt("Enter Choice")!;
main(choice);
