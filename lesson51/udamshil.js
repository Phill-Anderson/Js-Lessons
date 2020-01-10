function Materi(une, ungu) {
  this.ungu = ungu;
  this.une = une;
}

Materi.prototype.haragdah = function() {
  console.log(this.une + " үнэтэй матери байна.");
};

// var m1 = new Materi(1500, 'red');

function Amitan(nas, une, ungu) {
  Materi.call(this, une, ungu);
  this.nas = nas;
}

Amitan.prototype = Object.create(Materi.prototype);

Amitan.prototype.hoolloh = function() {
  console.log(
    this.nas +
      " настай " +
      this.une +
      " үнэтэй " +
      this.ungu +
      " өнгөтэй амьтан хооллолоо."
  );
};

function Hun(ner, nas, une, ungu) {
  Amitan.call(this, nas, une, ungu);
  this.ner = ner;
}

Hun.prototype = Object.create(Amitan.prototype);
Hun.prototype.setgeh = function(bodol) {
  console.log(
    this.ner +
      " нэртэй " +
      this.nas +
      " настай " +
      this.une +
      " үнэтэй " +
      this.ungu +
      ' өнгөтэй хүн "' +
      bodol +
      '" гэж бодлоо...'
  );
};

// Amitan unee = new Amitan();
var unee = new Amitan(20, 400000, "alag");
unee.haragdah();
unee.hoolloh();

var p1 = new Hun("Болдоо", 18, 150, "шар");
p1.haragdah();
p1.hoolloh();
p1.setgeh("Javascript лайтай юмааа");
