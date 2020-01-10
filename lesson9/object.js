var h1 = {
  name: "Энхтайван",
  job: "Програмист",
  hobbi: "Хичээл үзэх",
  location: "УБ, БГД, 8-р хороо, 37-21 тоот"
};

var h2 = {
  name: "Наранзул",
  job: "Англи хэлний орчуулагч",
  hobbi: "Хичээл заах",
  address: {
    location: "Улаанбаатар, Баянгол дүүрэг, 8-р хороо, 37-21 тоот",
    city: "Улаанбаатар хот",
    country: "Монгол"
  }
};

console.log(
  h1.job +
    " мэргэжилтэй " +
    h1.name +
    " нь " +
    h1.hobbi +
    " сонирхолтой бөгөөд " +
    h1.location +
    " -д амьдардаг юм."
);

console.log(
  h2.job +
    " мэргэжилтэй " +
    h2.name +
    " нь " +
    h2.address.country +
    " улсын нийслэл" +
    h2.address.location +
    "-д амьдардаг юм."
);

var c1 = {
  name: "Англи хэлний онлайн курс",
  lessonCount: 116,
  totalMin: 904,
  author: h1,
  price: 199000,
  discount: 26900
};

var c2 = {
  name: "Ярианы англи хэлний онлайн курс",
  lessonCount: 128,
  totalMin: 1217,
  author: h2,
  price: 146000,
  discount: 26900
};
console.log(
  c2.name +
    "-нь " +
    c2.author.name +
    " багш заах бөгөөд " +
    c2.lessonCount +
    " хичээлтэй юм." +
    c2.author.address.city
);
var x = "author";
var y = "job";
var dynamic = c2[x][y]; // обьекттай хувьсагчийн утгаас хамаарч динамик байдлаар хандаж буй нь
var static = c2.author.job; // статик байдлаар обьетод хандаж буй нь
console.log(dynamic);
