// MENU PARA CELULAR
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

// Fecha o menu quando a pessoa escolhe uma opção
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("active");
  });
});

// AGENDAMENTO DEMONSTRATIVO
function scheduleAppointment(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  const message = document.getElementById("booking-message");

  message.innerHTML =
    "✓ Obrigada, " + name +
    "! Sua solicitação para <strong>" + service +
    "</strong> foi registrada para " +
    formatDate(date) +
    ".<br>Este é um agendamento demonstrativo.";

  event.target.reset();
}

// DEIXA A DATA MAIS BONITA
function formatDate(date) {
  if (!date) return "";

  const parts = date.split("-");

  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

// BOTÃO DO WHATSAPP
function demoWhatsapp() {
  alert(
    "Studio Lumina 💛\n\n" +
    "Este botão abriria o WhatsApp do salão em um site real.\n\n" +
    "Projeto demonstrativo de portfólio."
  );
}

// INSTAGRAM
function demoInstagram() {
  alert(
    "Instagram demonstrativo ✨\n\n" +
    "Em um projeto real, este botão levaria para o Instagram do cliente."
  );
}

// NÃO PERMITE SELECIONAR DATAS PASSADAS
const dateInput = document.getElementById("date");

if (dateInput) {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}
