const expansion__button = document.getElementById('education__button');
const popup = document.getElementById('education');

function expansion() {
  button.style.transform = button.style.transform === 'rotate(-90deg)' ? 'rotate(0deg)' : 'rotate(-90deg)';
  popup.style.height = popup.style.height === '300px' ? '0' : '300px';
  popup.style.opacity = popup.style.opacity === '1' ? '0' : '1';
  if (button.style.transform === 'rotate(-90deg)') {
    button.style.marginTop = '-15x';
    button.style.marginRight = "2px";
  }
};
expansion__button.addEventListener('click', expansion)

const theyalow = document.getElementById('theyalow');
const design = document.getElementById('design');

theyalow.onclick = function(){
  window.location.href = './projects/theyalow/index.html';
}

design.onclick = function(){
  window.location.href = './projects/repair-design-project/index.html'
}

