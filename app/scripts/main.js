(function () {
  'use strict';

  var $ = window.$;
  // fix safari label bug with empty function
  document.querySelectorAll('label').onClick = function () { return false; };

  // show intro
  $('.intro').each( (index, el) => {
    $(el)
      .addClass('intro-show')
      .css({transitionDelay: index * 0.4 + 1 + 's'});
  });

}());
