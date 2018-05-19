const cat = document.getElementById('cat');
const counter = document.getElementById('counter');
let clicked = 0;

cat.addEventListener(
  'click',
  () => {
    clicked++;
    counter.textContent = clicked;
  },
  false,
);
