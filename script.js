const styleEl = document.querySelector('#style-title');
const scriptEl = document.querySelector('#script-title');
const reactEl = document.querySelector('#react-title');
const iconNavEl = document.querySelector('#nav-opener');

styleEl.addEventListener('click', () => {
  const styleCodeEl = document.querySelector('#style-code');
  const svgEl = document.querySelector('#style-svg');

  if (styleCodeEl.classList.contains('hidden')) {
    styleCodeEl.classList.remove('hidden');
    svgEl.style.transform = 'rotate(270deg)'; 
  } else {
    styleCodeEl.classList.add('hidden');
    svgEl.style.transform = 'rotate(90deg)'; 
  }
});

scriptEl.addEventListener('click', () => {
  const scriptCodeEl = document.querySelector('#script-code');
  const svgEl = document.querySelector('#script-svg');

  if (scriptCodeEl.classList.contains('hidden')) {
    scriptCodeEl.classList.remove('hidden');
    svgEl.style.transform = 'rotate(270deg)'; 
  } else {
    scriptCodeEl.classList.add('hidden');
    svgEl.style.transform = 'rotate(90deg)'; 
  }
});

reactEl.addEventListener('click', () => {
  const reactCodeEl = document.querySelector('#react-code');
  const svgEl = document.querySelector('#react-svg');

  if (reactCodeEl.classList.contains('hidden')) {
    reactCodeEl.classList.remove('hidden');
    svgEl.style.transform = 'rotate(270deg)'; 
  } else {
    reactCodeEl.classList.add('hidden');
    svgEl.style.transform = 'rotate(90deg)'; 
  }
});

iconNavEl.addEventListener('click', () => {
  const navigationEl = document.querySelector('#nav-adaptive');

  if(navigationEl.classList.contains('hidden')) {
    navigationEl.classList.remove('hidden');
    iconNavEl.src = './img/header/close.svg';
  } else {
    navigationEl.classList.add('hidden');
    iconNavEl.src = './img/header/list.svg';
  }
})