class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
  }

  addArea() {
    this.area = this.getArea();
  }

  getArea() {
    return this.width * this.height;
  }

  changeSize(newSize) {
    this.width = newSize;
    this.height = newSize;
  }
}

let s = new Square(10);
console.log(s);