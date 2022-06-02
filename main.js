// -----------------------//
// ---Work with String----//
// -----------------------//

var string = "Toi yeu em";
var array = string.split(" ");
console.log(array);

console.log("-----------------------");

var string = "abc";
var array = Array.from(string, function (a) {
  return a + a;
});
console.log(array);
console.log("-----------------------");
var string = "abc";
var array = Array.from(string, (x) => x + x);
console.log(array);
console.log("-----------------------");
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
console.log(flatArray);
