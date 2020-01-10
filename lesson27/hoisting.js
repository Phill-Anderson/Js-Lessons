var age = 23;
printAge(); // hoisting - той холбоотойгоор эхлээд үүсгэлтийн шатанд printAge() - ийг санах ойд undefined утгатайгаар үүсгэнэ. Тэгээд тухайн мөр execute хийж эхлэхэд тухайн хувьсагчуудад утга олгогдож ажиллах юм.
function printAge(name, country, city, age) {
  console.log(arguments); // js нь параметерүүдийг arguments гэсэн обьектод массив байдлаар хадгалдаг.
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  console.log(
    country +
      " улсын " +
      name +
      " нь " +
      city +
      " хотод амьдардаг ба " +
      age +
      " настай."
  );
  checkArgs("параметер1", "параметер2", "параметер3");
}
printAge("Нараа", "Монгол", " Улаанбаатар", 28);

function checkArgs(para1, para2, para3) {
  var x = 0;
  var y = 1;
  var z = 2;
  console.log("нийлбэр = " + (x + y + z));
  console.log(arguments);
}
