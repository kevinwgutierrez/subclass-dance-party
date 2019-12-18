
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

};
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  this.$node.animate({top: '600px'});
  this.$node.animate({left: '230px'})
  Dancer.prototype.step.call(this);

};