var birthDate = prompt("Таны төрсөн он хэд вэ");
console.log(typeof birthDate);
var currentYear = new Date().getFullYear();
var age = currentYear - birthDate;
var message = "сайн байна уу\n\n\nТаны нас: " + age;

if (birthDate !== null) {
  if (age > 18) {
    console.log("Та насанд хүрсэн байна");
  } else if (age > 15) {
    console.log("Та ахлах ангийн хүүхэд байна");
  } else if (age > 12) {
    console.log("Та бага юмуу эсвэл дунд ангийн хүүхэд байна");
  } else {
    console.log("Та бага ангийн хүүхэд байна");
  }
} else {
  alert("Та төрсөн огноогоо заавал оруулах ёстой");
  console.log("Та төрсөн огноогоо заавал оруулах ёстой");
}

//alert(message);
