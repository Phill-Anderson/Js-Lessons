function Animal(ner) {
  this.name = ner;
}

// prototype нь тусгай обьект юм.
// prototype ашигласнаар санах ойд Animal - ын hoolloh функц ганц удаа л үүснэ.
//Өөрөөр хэлбэл функц илүү хурдан ажиллана гэсэн үг.
// __proto__ ба prototype 2 нь хоорондоо ялгаатай ойлголтууд.
// __proto__ нь тухайн обьектын эх обьектыг зааж байдаг бол prototype нь зөвхөн тухайн обьектыг зааж байдаг.
Animal.prototype.hoolloh = function() {
  console.log(this.name + " хооллолоо");
};
var a1 = new Animal("ямаа");
a1.mailah = function() {
  console.log(this.name + " майллаа.");
};
a1.hoolloh();
a1.mailah();
var a2 = new Animal("үхэр");
a2.hoolloh();
var a3 = new Animal("адуу");
a3.hoolloh();

function My(ner) {
  this.name = ner;
}
My.prototype.sayName = function() {
  console.log("Миний нэр бол " + this.name);
};
var me = new My("Энхтайван");
me.sayName();
