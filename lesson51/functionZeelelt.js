var img = {
  file: "c:/images/a123.jpg",
  content: "муур",
  zuragTanih: function(color, size) {
    console.log(
      "Энэ зураг дээр " +
        color +
        " өнгөтэй " +
        size +
        " хэмжээтэй " +
        this.content +
        " байгаа нь танигдлаа."
    );
  }
};

img.zuragTanih("хар", "бяцхан");

var myImg = {
  file: "c:/images/a541.jpg",
  content: "нохой"
};

// BIND
var mySuperZuragTanihFunction = img.zuragTanih.bind(myImg, "шаргал");

mySuperZuragTanihFunction("жижиг");
mySuperZuragTanihFunction("аварга");
mySuperZuragTanihFunction("бяцхан");
mySuperZuragTanihFunction();

// CALL
img.zuragTanih.call(myImg, "ногоон", "дунд зэргийн");

// APPLY
var ddd = ["ягаан", "аварга"];
img.zuragTanih.apply(myImg, ddd);
