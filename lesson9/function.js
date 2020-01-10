//statement function
stateFunc("функцийг дээр, доор хаана ч дуудаж болно.");
function stateFunc(arg) {
  console.log("statement функц ажиллалаа: " + arg);
}
//expression function
var expFunc = function(arg) {
  console.log("expression функц ажиллалаа: " + arg);
};
expFunc("функцийг зөвхөн доор дуудаж болно.");

//утга буцаадаггүй функц
addVoid(2, 3);
function addVoid(x, y) {
  var z = x + y;
  console.log("нийлбэр: " + z);
}
//утга буцаадаг функц
function add(x, y) {
  var z = x + y;
  return z;
}
var result = add(10, 11);

console.log(result);
var module = function(too) {
  var mod;
  if (too < 0) mod = -too;
  else mod = too;
  return mod;
};
var myFunc = function(x, y, z) {
  var niilber = module(x) + module(y) + module(z);
  return niilber;
};
var re = myFunc(-5, -5, -5);
console.log(re);
//утга буцаадаг функц ашиглан функцийн үр дүнг цааш нь параметер болгон дамжуулах нь үр ашиг өндөртэй байдаг.
var resAdd = myFunc(-1, -2, -3) + myFunc(-10, 11, -5);
console.log(resAdd);
