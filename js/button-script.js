// clear
document.getElementById("bt-C").addEventListener("click", () => {
  document.getElementById("numbers-input").innerHTML = "";
});

// comma
document.getElementById("bt-A").addEventListener("click", () => {
  document.getElementById("numbers-input").innerHTML += ",";
});

// plus
document.getElementById("bt-plus").addEventListener("click", () => {
  document.getElementById("numbers-input").innerHTML += "+";
});

// less
document.getElementById("bt-less").addEventListener("click", () => {
  document.getElementById("numbers-input").innerHTML += "-";
});

// multply
document.getElementById("bt-mult").addEventListener("click", () => {
  document.getElementById("numbers-input").innerHTML += "*";
});

// divide
document.getElementById("bt-divi").addEventListener("click", () => {
  document.getElementById("numbers-input").innerHTML += "/";
});

// number buttons
function buttonAttrib() {
  for (let i = 0; i < 10; i++) {
    const button = document.getElementById("bt-" + i);
    if (button) {
      button.addEventListener("click", () => {
        const eventL = document.getElementById("numbers-input");
        if (eventL) {
          eventL.innerHTML += i;
        }
      });
    }
  }
}

buttonAttrib();
