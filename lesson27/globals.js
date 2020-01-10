var lastName = "john";
var data = "string data";
try {
  console.log(lastName);
  console.log(global.lastName); // nodejs дээрх global
  console.log(window.lastName); // зөвхөн браузер дээр ажиллана
  console.log(globalThis.lastName); // зөвхөн браузер дээр ажиллана
  var jan = Math.round(data);
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
    console.log("type error" + jan);
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
    console.log("range error");
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
    console.log("eval error");
  } else {
    // statements to handle any unspecified exceptions
    // pass exception object to error handler
    console.log("fine thanks");
  }
}
function muFunc() {
  var name = "phill";
  console.log(name);
  function job() {
    var x = "hello" + pi;
    console.log(x);
  }
}
var pi = 3.14;
