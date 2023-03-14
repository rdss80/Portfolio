const readMoreBtn = document.querySelector('.read-more');
const hiddenText = document.querySelector('.hidden-text');
const hideTextBtn = document.querySelector('.hide-text');

readMoreBtn.addEventListener('click', function(event) {
  event.preventDefault();
  hiddenText.style.display = 'block';
  readMoreBtn.style.display = 'none';
});

hideTextBtn.addEventListener('click', function(event) {
  event.preventDefault();
  hiddenText.style.display = 'none';
  readMoreBtn.style.display = 'block';
});