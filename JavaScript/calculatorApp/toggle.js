document.querySelector('#checkbox').addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });

const toggleBtn = document.querySelector(".toggle");
const calculator = document.querySelector("#calculator");
let isDark = true;
toggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  toggleBtn.classList.toggle("active");
  isDark = !isDark;
};