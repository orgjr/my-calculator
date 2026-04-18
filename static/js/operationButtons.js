document.addEventListener('DOMContentLoaded', () => {
  const buttonPressed = document.getElementById('operation-display');

  const clear = document.getElementById('clear');
  const comma = document.getElementById('comma');
  const operatorButtons = {
    plus: '+',
    less: '-',
    mult: '*',
    divi: '/',
  };

  function appendComma() {
    const displayValue = buttonPressed.textContent;
    const commaValue = ',';
    const parts = displayValue.split(/[+\-*/]/);
    const lastNumber = parts[parts.length - 1];

    if (buttonPressed.textContent.length >= 10) return;
    if (lastNumber.includes(',')) return;
    buttonPressed.textContent += commaValue;
  }

  function appendOperator(type) {
    const displayValue = buttonPressed.textContent;
    const lastValue = displayValue.slice(-1);
    const mustNotStartOperators = ['+', '*', '/'];
    const operators = ['+', '-', '*', '/'];

    if (buttonPressed.textContent.length >= 10) return;
    if (displayValue[0] == undefined && mustNotStartOperators.includes(type))
      return;
    if (operators.includes(lastValue) && operators.includes(type)) return;
    buttonPressed.textContent += type;
  }

  if (clear) {
    clear.addEventListener('click', () => {
      buttonPressed.textContent = '';
    });
  }

  if (comma) {
    comma.addEventListener('click', () => {
      appendComma();
    });
  }

  Object.entries(operatorButtons).forEach(([key, type]) => {
    const operatorButtonAdd = document.getElementById(key);
    if (operatorButtonAdd) {
      operatorButtonAdd.addEventListener('click', () => {
        appendOperator(type);
      });
    }
  });
});
