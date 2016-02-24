(function () {
  'use strict';

  // fix safari label bug with empty function
  document.querySelectorAll('label').onClick = function () { return false; };
}());
