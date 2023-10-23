class Pemain {
  constructor(x, y, warna) {
    this.d = 35;
    this.x = x;
    this.y = y;
    this.warna = color(warna);
    this.loncat = 5;
  }

  tampilkan() {
    fill(this.warna);
    circle(this.x, this.y, this.d);
  }

  maju() {
    this.x += this.loncat;
  }

  finish() {
    if (this.x > width -50) {
      fill(this.warna);
      textSize(50);
      textAlign (CENTER)
      text("finish", width/2, height/2);
      noLoop()
    }
  }
}
