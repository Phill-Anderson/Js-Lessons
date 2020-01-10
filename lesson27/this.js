var p1 = {
  name: "Boldoo",
  printThis: function() {
    console.log(this); // this түлхүүр үг нь тухайн функцыг агуулж буй обьектыг заана.
    engiinFunction();
    function engiinFunction() {
      // функц дотор бичигдсэн функц бол энгийн функц гэж үзнэ.
      console.log(this); // энгийн функцын хувьд this түлхүүр үг нь өөрийг нь агуулж буй глобал обьектыг заадаг.
    }
  }
};
p1.printThis();

var p2 = {
  name: "Naraa"
};
p2.printThis = p1.printThis; // p1 обьектын printThis функцыг зээлж байгаа нь
p2.printThis();
