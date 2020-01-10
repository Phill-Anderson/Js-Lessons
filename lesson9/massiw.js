var lessons = ["англи хэл", "математик", "хими", "физик"];

lessons[0] = "орос хэл";
lessons[lessons.length] = "биеийн тамир"; // сүүлээс нь элемэнт нэмэх

var fDelete = lessons.shift(); // эхний элэмэнтийг устгах ба устгасан элэмэнтээ буцаана
console.log('"' + fDelete + '"-ийг устгасан');

var fAdd = lessons.unshift("түүх"); // эхнээс нь элэмэнт нэмэх
console.log('"' + fAdd + '"-ийг нэмсэн');

lessons.push("уран зохиол"); //сүүлээс нь элемэнт нэмэх
console.log(lessons.indexOf("байхгүй элемэнт")); // -1 байвал элемэнт байхгүй гэсэн утгатай

var hicheel = "хими";
if (lessons.indexOf("hicheel") === -1)
  console.log(hicheel + " гэсэн элемэнт байхгүй байна");
else console.log(hicheel + " гэсэн элемэнт байгаа");

console.log(lessons);
console.log(lessons.length + " ш хичээл байна.");
