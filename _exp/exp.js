const techniques = require("../src/utils/data");
const item = { id: 1, name: "abc" };

function test() {
  return new Promise((resolve, reject) => {
    resolve(item);
  });
}

function getTechniques() {
  return new Promise((resolve, reject) => {
    resolve(techniques);
  });
}

test().then(data => console.log(data));
getTechniques().then(data => console.log(data));
console.log("hello");
console.log(techniques[0].name);
