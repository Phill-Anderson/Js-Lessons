String.prototype.sainuu = function() {
  console.log(
    "prototype обьект руу хандаж String обьектийг sainuu(); функцээр өргөтгөж буй нь."
  );
};

console.log("дурын стринг дэх sainuu функцыг дуудаж байгаа нь".sainuu());

var materi = { name: "bodis" };
materi.haragdah = function() {
  console.log(this.name + " материйн түвшинд харагдлаа");
};

var amitan = Object.create(materi);
amitan.name = "amitan";
amitan.hoolloh = function() {
  console.log(this.name + " нь амьтан түвшинд хооллолоо.");
};
amitan.hodloh = function() {
  console.log(this.name + " нь амьтан түвшинд хөдлөлөө.");
};

var hun = Object.create(amitan);
hun.name = "hun";
hun.tushaalAvah = function(tushaal) {
  console.log(this.name + " нь " + tushaal + " тушаал авлаа.");
};

var tsereg = Object.create(hun);
tsereg.name = "Болдоо";
tsereg.baildah = function() {
  console.log(this.name + " байлдлаа.");
};

var tagnuul = Object.create(hun);
tagnuul.name = "Тагнуулч 1";

// console.log(tsereg.toString());
tsereg.haragdah();
tsereg.hoolloh();
tsereg.hodloh();
tsereg.tushaalAvah("урагшаа давш!");
tsereg.baildah();

tagnuul.tushaalAvah("China ruu tagna...");
console.log(tsereg.__proto__);
console.log(tsereg.__proto__.__proto__);
