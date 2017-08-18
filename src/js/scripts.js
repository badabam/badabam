let intro = document.querySelectorAll('.intro');
[].forEach.call(intro, (el, index) => {
  setTimeout(() => {
    el.classList.add('intro-show');
    el.style.transitionDelay = index * 0.4 + 1 + 's';
  });
});

// fix safari label bug with empty function
document.querySelectorAll('label').onClick = function () { return false; };


import {ModusOperandi} from '../components/modus-operandi';
new ModusOperandi();
