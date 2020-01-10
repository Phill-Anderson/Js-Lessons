// Value  (primitive VS Object)
var a = 12; //  a ===> 12
var b = a; //  b ===> 12 а хувьсагчийн хуулбарыг b хувьсагчийн санах ойд зааж өгч байна.
// санах ойн тус тусдаа хаягийг a,b хувьсагч нь эзлэнэ.
a = 13;

console.log("a = " + a);
console.log("b = " + b);

// Reference
var p1 = {
  name: "notebook",
  price: "300$"
};

var p2 = p1; // Обьектын тохиолдолд p1 ба p2 хувьсагчууд нь нэг санах ойн байрыг эзлэнэ гэдгийг зааж өгч байна.

p1.name = "гутал";
p2.price = 1200;

console.log("p1 = " + p1.name + ", " + p1.price);
console.log("p2 = " + p2.name + ", " + p2.price);

var x = [2, 6, 10];
var y = x; //Обьектын тохиолдолд p1 ба p2 хувьсагчууд нь нэг санах ойн байрыг эзлэнэ гэдгийг зааж өгч байна.
//   тийм учраас x,y -хувьсагчуудын аль нэгийн утгыг өөрчлөхөд нөгөө хувьсагчын утга дагаж өөрчлөгдөнө.
y[0] = 50;
x[2] = 100;

console.log(x);
console.log(y);
/////////////////////////////////////////////////////////////
var name = "notebook";
var price = 250000;

info(name, price);
console.log(name + " нэртэй бүтээгдэхүүний үнэ : " + price);
function info(name, price) {
  console.log(name + " нэртэй бүтээгдэхүүний үнэ: " + price + " байснаа ");
  price = price - 5000; //
  console.log(price + "₮ болж хямдарлаа...");
}

////////////////////////////////////////////////////////

var product = {
  name: "shoe",
  price: "15000"
};

// Primitive Vs Object
infoNew(product);

console.log(product.name + " бүтээгдэхүүний үнэ : " + product.price + "₮");
function infoNew(p) {
  console.log(p.name + " нэртэй бүтээгдэхүүн " + p.price + "₮ үнэтэй байснаа ");
  p.price = p.price - 11000; // функц руу обьект дамжуулж байгаа бол дамжуулсан обьектын утгад дахин утга онооход уг обьектын тухайн утга өөрчлөгдөнө.
  console.log(p.price + "₮ үнэтэй болж өөрчлөгдлөө");
}
