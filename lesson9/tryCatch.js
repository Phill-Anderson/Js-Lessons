try {
  console.log("Програм эхэллээ.");
  //var x = prompt("Ямар нэгэн тоо оруулна уу");
  // console.log("Таны оруулсан тоо: " + x);
} catch (error) {
  if (error.message === "prompt is not defined") {
    console.log("Програм маань броузер дээр ажиллана.");
  } else {
    console.log("гарсан алдаа : " + error);
  }
}
