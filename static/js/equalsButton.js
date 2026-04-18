function equals() {
  const display = document.getElementById('operation-display');
  let value = display.textContent;
  const invalidChar = [',', '+', '-', '*', '/'];

  while (invalidChar.includes(value.slice(-1))) {
    value = value.slice(0, value.length - 1);
  }
  if (value[0] == 0) {
    value = value.slice(1, value.length);
  }

  try {
    value = value.replaceAll(',', '.');
    let result = eval(value);
    result = result.toString().replaceAll('.', ',');

    display.textContent = result;
  } catch (err) {
    display.textContent = 'error';
  }
}

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  equals();
});
