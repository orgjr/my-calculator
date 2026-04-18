function assignNumbers() {
  const buttonPressed = document.getElementById('operation-display');
  for (let i = 0; i < 10; i++) {
    const button = document.getElementById('bt-' + i);
    if (button) {
      button.addEventListener('click', () => {
        if (buttonPressed) {
          if (buttonPressed.textContent.length < 10) {
            buttonPressed.textContent += i;
          }
        }
      });
    }
  }
}

assignNumbers();
