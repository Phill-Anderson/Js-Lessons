var birthYears = [1954, 1981, 2005, 1978, 1986, 2010];
var ages1 = processArray(birthYears, findOutAges);
console.log(birthYears + " <------ төрсөн он");
console.log(ages1 + " <------ хэдэн настай эсэх");
console.log(processArray(ages1, isFullAge) + " <----- насанд хүрсэн эсэх");
console.log(processArray(ages1, findOutMaxHeartRate) + " <---- зүрхний цохилт");
console.log(processArray(ages1, isPension) + " <---- тэтгэгвэрт гарсан эсэх");
function processArray(myArr, fn) {
  var arr = [];
  for (var i = 0; i < myArr.length; i++) {
    arr.push(fn(myArr[i]));
  }
  return arr;
}
function findOutAges(el) {
  return new Date().getFullYear() - el;
}
function isFullAge(el) {
  return el >= 18;
}
function findOutMaxHeartRate(el) {
  return Math.round(206.9 - 0.67 * el);
}
function isPension(age) {
  return age > 65;
}
