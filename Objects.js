
function Rectangle(height, width) {
  this.height = height;
  this.width = width;

  this.calcArea = function() {
      return this.height * this.width;
  };

    this.calcPerimeter = function(){       // put our perimeter function here!
      return this.height * 2 + this.width * 2;
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();