const Bluebird = require("bluebird");

//Task 1 difference between JavaScript Promise and Bluebird Promise

// function simulateRequest(id: number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Request ${id} completed`);
//       resolve(id);
//     }, 1000);
//   });
// }

// const requestArr = [1, 2, 3, 4, 5];

// async function processRequestJs() {
//   for (const request of requestArr) {
//     await simulateRequest(request);
//   }
// }

// async function processRequestBluebird() {
//   Bluebird.map(
//     requestArr,
//     async (request: number) => {
//       await simulateRequest(request);
//     },
//     { concurrency: 1 }
//   );
// }

// (async function () {
//   console.log("Execute Javascript Promise");
//   await processRequestJs();
//   console.log("Execute Bluebird Promise");
//   processRequestBluebird();
// })();

//Task 6 Bluebird handle 100 request in async mode

function simulateRequest(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Request ${id} completed`);
      resolve(id);
    }, Math.random() * 1000);
  });
}

async function processRequest(requests: number[]) {
  const processBatch = async (batch: number[]) => {
    //This did not execute in order

    // await Bluebird.map(
    //     batch,
    //     async (requestId: number) => {
    //       await simulateRequest(requestId);
    //     },
    //     { concurrency: 1 }
    //   );

    //This Work in correct way
    for (const requestID of batch) {
      await simulateRequest(requestID);
    }
  };

  const batches = [];
  for (let i = 0; i < requests.length; i += 10) {
    batches.push(requests.slice(i, i + 10));
  }

  for (let batch of batches) {
    await processBatch(batch);
  }
}

const totalRequest = 100;
const requestIds = Array.from({ length: totalRequest }, (_, i) => i + 1);

processRequest(requestIds)
  .then(() => {
    console.log("Completed All Requests");
  })
  .catch((err) => {
    console.log("Error Occurred", err);
  });
