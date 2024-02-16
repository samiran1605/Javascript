async function asyncQuiz() {
  console.log("Start");

  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1"), 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2"), 500);
  });

  console.log(await promise2);
  console.log(await promise1);

  console.log("End");
}

asyncQuiz();