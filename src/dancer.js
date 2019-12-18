// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};
Dancer.prototype.step = function() {

  setTimeout(function () {
    this.step();
  }.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};


