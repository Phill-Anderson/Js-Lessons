var too = [12, 13, 17, 90, 21, 65, 32];
for (var i = 0; i < too.length; i++) {
  if (too[i] % 7 !== 0) continue;
  console.log(too[i] + " энэ тоо 7-д хуваагдана");
  var huvaasanToo = too[i] / 7;
  console.log(too[i] + "тоог 7-д хуваахад " + huvaasanToo + " гарна");
  break;
}
console.log("програм дууслаа...");
