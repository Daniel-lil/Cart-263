function Star() {
  //creating variables for the star's attributes and storing random locations in them
  this.x = random(-width, width);
  this.y = random(-height, 0);
  this.z = random(width);
  this.pz = this.z;

  //function to reset star's position if they go out of view
  this.updateStar = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, -height/6);
      this.pz = this.z;
    }
  };

  //function to draw the stars
  this.showStar = function() {
    fill(255, 255, 255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);

    translate(0, 0, -100)
    ellipse(sx, sy, r, r, );

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255, 255, 255,);
    line(px, py, sx, sy);
  };
}
