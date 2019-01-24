var $sectionOne = $('.section-one')
var $sectionTwo = $('.section-two')
var $sectionThree = $('.section-three')
var $sectionFour = $('.section-four')
var $sectionFive = $('.section-five')


$sectionOne.addClass('js-allow-animation')
$sectionTwo.addClass('js-allow-animation')
$sectionThree.addClass('js-allow-animation')
$sectionFour.addClass('js-allow-animation')
$sectionFive.addClass('js-allow-animation')

$sectionOne.waypoint(function (direction) {
  if (direction == 'down') {
    $sectionOne.addClass('js-work-animate');
  } else {
    $sectionOne.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$sectionTwo.waypoint(function (direction) {
  if (direction == 'down') {
    $sectionTwo.addClass('js-work-animate');
  } else {
    $sectionTwo.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$sectionThree.waypoint(function (direction) {
  if (direction == 'down') {
    $sectionThree.addClass('js-work-animate');
  } else {
    $sectionThree.removeClass('js-work-animate');
  }
}, {offset: '70%'});

$sectionFour.waypoint(function (direction) {
  if (direction == 'down') {
    $sectionFour.addClass('js-work-animate');
  } else {
    $sectionFour.removeClass('js-work-animate');
  }
}, {offset: '70%'});

$sectionFive.waypoint(function (direction) {
  if (direction == 'down') {
    $sectionFive.addClass('js-work-animate');
  } else {
    $sectionFive.removeClass('js-work-animate');
  }
}, {offset: '70%'});
