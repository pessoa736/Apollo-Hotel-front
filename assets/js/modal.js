const modal = document.getElementById("bookingModal");
const openButtons = document.querySelectorAll(".open-booking");
const closeBtn = document.querySelector(".close-modal");
const f1Widget = document.getElementById("f1-widget");
const closeF1 = document.getElementById("closeF1");
const countdownEl = document.getElementById("f1-countdown");

/* abrir modal */
openButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

/* fechar modal */
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

/* contador adultos/crianças */
document.querySelectorAll(".counter-box").forEach((box) => {
  const minus = box.querySelector(".minus");
  const plus = box.querySelector(".plus");
  const number = box.querySelector("span");

  let count = parseInt(number.textContent);

  plus.onclick = () => {
    count++;
    number.textContent = count;
  };

  minus.onclick = () => {
    if (count > 0) count--;
    number.textContent = count;
  };
});

/* DATA DA PRÓXIMA CORRIDA */
const raceDate = new Date("2026-04-19T15:00:00");

/* botão fechar → esconde só nesta sessão da página */
closeF1.addEventListener("click", () => {
  f1Widget.style.display = "none";
});

/* contador */
function updateCountdown() {
  const now = new Date();
  const diff = raceDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "A corrida começou!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
