const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generate");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const lengthSlider = document.getElementById("lengthSlider");
const lengthInput = document.getElementById("lengthInput");

// Sync slider and number input
lengthSlider.addEventListener("input", () => {
  lengthInput.value = lengthSlider.value;
});
lengthInput.addEventListener("input", () => {
  lengthSlider.value = lengthInput.value;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordField.value).then(() => {
    copyBtn.textContent = "✅";
    setTimeout(() => {
      copyBtn.textContent = "📋";
    }, 1500);
  });
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  let charset = "";

  if (uppercaseCheckbox.checked) charset += uppercase;
  if (lowercaseCheckbox.checked) charset += lowercase;
  if (numbersCheckbox.checked) charset += numbers;
  if (symbolsCheckbox.checked) charset += symbols;

  if (charset.length === 0) {
    passwordField.value = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    password += charset[randIndex];
  }

  passwordField.value = password;
});
const themeToggleInput = document.getElementById("themeToggle");
const toggleIcon = document.getElementById("toggleIcon");

themeToggleInput.addEventListener("change", () => {
  const isLight = themeToggleInput.checked;
  document.body.classList.toggle("light-mode", isLight);
  toggleIcon.textContent = isLight ? "☼" : "☽";
});