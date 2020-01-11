function showPost(content) {
  var editedContent =
    "Шинэ мэдээ: " +
    content +
    "\n\nТа нэмэлт мэдээлэл авахыг хүсвэл 1234.мн сайтаар зочилоорой";
  console.log(editedContent);
  return function() {
    var email = prompt(
      editedContent +
        "\n\n имейл хаягаа оруулвал бид танд шинэ мэдээ мэдээллийг хүргэж байх болно."
    );
    document.write(
      "баярлалаа! Таны оруулсан имейл хаягийг хүлээн авлаа" + email
    );
  };
}
var medee = "1234.mn сайтын хямдрал дуусахад 1 хоног үлдлээ.";
var askEmailFunction = showPost(medee);
//setTimeout(askEmailFunction, 5000);

// илүү төвөгтэй Closure жишээ
console.log(
  "===========================Илүү төвөгтэй Closure жишээ==================================="
);
var a = [];

a.push(34);
a.push("hello");

a.push(function() {
  console.log("сайн байна уу, массив дотроос мэндчилж байна.");
  return function() {
    console.log("Массив доторх функц доторх функцээс хэвлэв");
    return function() {
      console.log("...INCEPTION...");
    };
  };
});
a[2]()()();

//////////////////////////
console.log("================Prepare функц=====================");

function prepare() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  console.log("prepare() - ны давталт дууссаны дараах i = " + i);
  return arr;
}
var massive = prepare();
massive[0]();
massive[1]();
massive[2]();

/////////////////////////////////////
console.log("====================Closure өөр нэг жишээ=======================");
function prepare1() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i) // IIFE ашигласан байгаа биздэ
    );
  }
  console.log("prepare1() - ныдавталт дууссаны дараах i - ын утга = " + i);
  return arr;
}
var massive1 = prepare1();
massive1[0]();
massive1[1]();
massive1[2]();
