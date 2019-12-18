var makeBlinkyDancer2 = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

};
makeBlinkyDancer2.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer2.prototype.constructor = makeBlinkyDancer2;

// this is the actual DANCE STEP
makeBlinkyDancer2.prototype.step = function() {

  this.$node.animate({left: '200px'});
  this.$node.animate({top: '450px'});

  Dancer.prototype.step.call(this);
  this.$node;
};