function toggleMenu() {
  document.getElementById("main-nav").classList.toggle("open");
}

const sections = ['home', 'chronicles', 'shop', 'sanctum'];

function showSection(id) {
  sections.forEach(s => {
    document.getElementById(s).style.display = s === id ? 'block' : 'none';
  });
  if (id === 'chronicles') initTimeline();
}

function openModal() {
  document.getElementById("orderModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

function initTimeline() {
  const buttons = document.querySelectorAll('.timeline-button');
  const content = document.getElementById('content');

  const timelineData = {
    zoroaster: `<h3>Зороастризм и духи животных (1000-500 до н.э.)</h3>
        <p>В зороастрийской традиции животные выступали как воплощение божественных сил. Пёс был символом верности и защитника душ умерших.</p>
        <p>Обряды обращения к духам животных позволяли получить мудрость и защиту в повседневной жизни и в путешествии по загробному миру.</p>`,

    bast: `<h3>Культ Баст и кошачьи богини (30 до н.э.-200 н.э.)</h3>
        <p>В египетской мифологии Бастет была богиней домашнего очага, плодородия и защиты. Кошки считались её священными животными.</p>
        <p>Храмы Бастет стали местами поклонения и общения с фамилиарами, где люди могли найти защиту и благословение через животных.</p>`,

    salem: `<h3>Салемские процессы над ведьмами (1692-1693)</h3>
        <p>В период Салемских процессов животные часто рассматривались как «дьявольские фамилиары» и использовались как доказательства колдовства.</p>
        <p>Эти события оставили глубокий след в общественном восприятии фамилиаров, изменив их образ на протяжении столетий.</p>`
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      content.innerHTML = timelineData[btn.dataset.id];
    });
  });
}

// Show home by default
document.addEventListener("DOMContentLoaded", function () {
  showSection('home');
});