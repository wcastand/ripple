import tinycolor from 'tinycolor2';

const boxes = document.querySelectorAll('.box');
boxes.forEach(initBox)


function initBox (el) {
  el.addEventListener('click', rippleEvt)
}

function rippleEvt (e) {
  const ripple = document.createElement('div')
  ripple.classList.add('ripple')
  ripple.addEventListener("animationend", animEnd, false)
  e.target.appendChild(ripple)
  const p = e.target.getBoundingClientRect()
  ripple.style.top = e.pageY - p.top + 'px';
  ripple.style.left = e.pageX - p.left + 'px';
  ripple.style.backgroundColor = tinycolor.random().toHexString();
  ripple.classList.add('active')
  e.preventDefault();
}

function animEnd (e) {
  e.target.parentNode.style.backgroundColor = e.target.style.backgroundColor;
  e.target.parentNode.removeChild(e.target);
}
