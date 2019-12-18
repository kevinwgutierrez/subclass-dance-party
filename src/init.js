// rendering document for jquery a
$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() + 50,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // create style settings for first dancer
    var dancer1StyleSettings = {
      'position': 'absolute',
      'content': 'url(images/dancing.gif)',
      'max-height': '300px',
      'max-width': '300px'
    };
    // change current dancer class to 'dancer1'
    $('.dancer').attr('class', 'dancer1');
    // add dancer style to first dancer (jquery)
    $('.dancer1').css(dancer1StyleSettings);
    // append the dancer to the document
    $('body').append(dancer.$node);
     // add dancer to array
    window.dancers.push(dancer);
  });

  // create second dancer button
  $('.addDancerButton2').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data ('dancer-maker-function-name2');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      // create random location on document to place dancer for 'top' argument
      $('body').height() + Math.random(),
      // create random location on document to place dancer for 'left argument
      $('body').width() * Math.random(),
      // create random interval to set as time between steps
      Math.random() * 1000
    );
    // create style settings for second dancer
    var dancer2StyleSettings = {
      'position': 'absolute',
      'content': 'url(images/twerk.gif)',
      'max-height': '400px',
      'max-width': '400px'
    };
    // change current dancer class to 'dancer2'
    $('.dancer').attr('class', 'dancer2');
    // set the dancer2 settings to var dancer2
    $('.dancer2').css(dancer2StyleSettings);
    // add the dancer 2 to the body
    $('body').append(dancer.$node);
    // add dancer to array
    window.dancers.push(dancer);
  });

  // create line up button
  $('.lineUpButton').on('click', function(event) {
    // set dancers to variable
    var dancers = window.dancers;
    // loop through each dancer and change class to be uniform
    dancers.forEach(function (dancer) {
      dancer.setPosition(500, $('body').width() * Math.random());
    });

  });
});

