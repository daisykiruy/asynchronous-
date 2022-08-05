//syncronous

// console.log("i eat");
// console.log("ice cream");
// console.log("with");
// console.log("a spoon");

////asynchronous javascript

// console.log("i eat");
// console.log("ice cream");

// setTimeout(function () {
//   console.log("with");
//   console.log("a spoon");
// }, 5000);

//call backs

function walk() {
  function dogs(cows) {
    console.log("order receipt");
    cows();
  }

  function talk() {
    console.log("order received");
  }
  dogs(talk);
  setTimeout(function () {
    console.log("production has started");
  }, 1000);
  setTimeout(function () {
    console.log("production is finished");
  }, 2000);
  setTimeout(function () {
    console.log("welcome again");
  }, 3000);
}

function zero() {
  console.clear();
}

const button = document.getElementById("btn");
button.addEventListener("click", walk);

const button1 = document.getElementById("ppl");
button1.addEventListener("click", zero);
