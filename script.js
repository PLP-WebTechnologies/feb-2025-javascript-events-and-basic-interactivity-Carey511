const changeBtn = document.getElementById('changeButton');
let isTextChanged = false;

changeBtn.addEventListener('click', () => {
  if (isTextChanged) {
    changeBtn.textContent = 'Change Me';
    changeBtn.style.backgroundColor = ''; // Reset color
  } else {
    changeBtn.textContent = 'Changed!';
    changeBtn.style.backgroundColor = 'lightgreen';
  }
  isTextChanged = !isTextChanged;
});