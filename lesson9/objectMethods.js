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

var c1 = {
  name: "Англи хэлний онлайн курс",
  lessonCount: 116,
  totalMin: 904,
  author: h1,
  price: 199000,
  discount: 26900,
  info: function() {
    console.log(this.author.name + " багш нь " + this.name + " хичээл заана.");
  }
};

var c2 = {
  name: "Ярианы англи хэлний онлайн курс",
  lessonCount: 128,
  totalMin: 1217,
  author: h2,
  price: 146000,
  discount: 26900,
  info: function() {
    return this.author.name + " багш нь " + this.name + " хичээл заана";
  }
};
c1.info();
console.log(c2.info());
