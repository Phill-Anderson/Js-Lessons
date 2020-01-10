/*
var sum = 0;
var limit = 21;
for (var i = 0; i <= limit; i++) {
  sum = sum + i;
  console.log("i = " + i + " байхад sum = " + sum);
}
console.log("1 - ээс " + i + " хүртэл тооны нийлбэр = " + sum);
*/

/////////////////////////////////////
/*
var sumAdd = 0;
var lim = 21;
for (var i = 0; i <= lim; i++) {
  if (i % 7 === 0) {
    sumAdd = sumAdd + i;
    console.log(i + " байхад нийлбэр нь = " + sumAdd);
  }
}
console.log(
  "1- ээс " + lim + " хүртэлх 7-д хуваагдах тооны нийлбэр = " + sumAdd
);
*/
////////////////////////////////////////////////////////////
for (var i = 0; i <= 10; i++) {
  var sags = [];
  if (anhniiTooMon(i) === true) {
    console.log(i + " тоо бол анхын тоо мөн.");
  }
}
function anhniiTooMon(too) {
  var anhniiTooMonuu = true;
  for (var x = 2; x < too; x++) {
    if (too % x === 0) {
      anhniiTooMonuu = false;
    }
  }
  return anhniiTooMon;
}
//////////////////////////
var arr = [];
for (var i = 0; i < 10; i++) {
  var too = Math.random() * 100;
  var nearInt = Math.round(too);
  arr.push(nearInt);
}
console.log(arr);
///////////////// Min toog oloh
var minToo = 100;
var mintooIndex = -1;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < minToo) {
    minToo = arr[i];
    mintooIndex = i;
  }
}
console.log(
  i +
    " элэмэнттэй массиваас хамгийн бага утга нь " +
    minToo +
    " бөгөөд индекс нь " +
    mintooIndex
);
//////////////// Max toog oloh
var maxToo = 0;
var maxtooIndex = -1;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > maxToo) {
    maxToo = arr[i];
    maxtooIndex = i;
  }
}
console.log("max тоо нь " + maxToo + " индекс нь " + maxtooIndex);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
