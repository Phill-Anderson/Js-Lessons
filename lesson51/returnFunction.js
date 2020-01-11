function interviewQuestion(job) {
  if (job === "programmer") {
    return function(name) {
      console.log(name + ", та prototype гэж юу болохыг мэдэх үү");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", та хэддүгээр ангид хичээл орж чадах вэ");
    };
  } else if (job === "driver") {
    return function(name) {
      console.log(name + ", мотоцикл барьж чадах уу");
    };
  }
}

var programmerQuestion = interviewQuestion("programmer");
var teacherQuestion = interviewQuestion("teacher");

programmerQuestion("Болдоо");
teacherQuestion("Сараа");

var driverQuestion = interviewQuestion("driver");
driverQuestion("Бат");

interviewQuestion("driver")("Халиунаа"); // дээрхи 2 мөрийг 1 мөр болгон товчлон ингэж бичиж болно.
