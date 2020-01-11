var birthYears = [1981, 2005, 1978, 1986, 2010];
var ages = findOutAges();

console.log(ages);
console.log(isFullAge());
console.log(findOutMaxHeartRate());

function findOutAges() {
  var arr = [];
  for (var i = 0; i < birthYears.length; i++) {
    arr.push(new Date().getFullYear() - birthYears[i]);
  }
  return arr;
}
function isFullAge() {
  var arr = [];
  for (var i = 0; i < ages.length; i++) {
    arr.push(ages[i] >= 18);
  }
  return arr;
}
function findOutMaxHeartRate() {
  var arr = [];
  for (var i = 0; i < ages.length; i++) {
    arr.push(Math.round(206.9 - 0.67 * ages[i]));
  }
  return arr;
}
// дээрх кодуудаас харвал функц болгонд ижилхэн кодууд давтагдаж бичигдсэн байна. энэ нь тиймч сайн програмчлал биш юмаа.
// эдгээр тиймч сайн биш кодуудыг сайжруулахын тулд функ руу функц дамжуулах замаар сайжруулж болно. ( first class - ын давуу тал гэж нэрлэдэг)  жишээ нь:
// массиваар давталт хийдэг ерөнхий зориулалттай функц бичье
var ages1 = processArray(birthYears, findOutAges);
console.log(birthYears);
console.log(ages1);
console.log(processArray(ages1, isFullAge));
console.log(processArray(ages, findOutMaxHeartRate));

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
function findOutMaxHeartRate() {
  return Math.round(206.9 - 0.67 * el);
}
// ийнхүү функцууд хамаагүй бага бичиглэлтэй, энгийн бөгөөд мэргэжлийн түвшний кодуудтай боллоо.
