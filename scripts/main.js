// function showMessage() {
//   alert("Hello World!");
// }
// showMessage();

// console.log("Hello developer world"); // Output of a normal message
// console.debug("Hello developer world"); // Output of a debug message
// console.error("Hello developer world"); // Output of an error message
// console.info("Hello developer world"); // Output of an info message
// console.warn("Hello developer world"); // Output of a warn message

function calculateSum() {
  const x = parseInt(document.getElementById("field1").value);
  const y = parseInt(document.getElementById("field2").value);
  const result = document.getElementById("result");
  console.log(x + y);
  result.vale = x + y;
}
