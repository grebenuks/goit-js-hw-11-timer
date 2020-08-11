//? Создай плагин настраиваемого таймера, который ведет обратный отсчет до
//? предварительно определенной даты.Такой плагин может использоваться в блогах и
//? интернет - магазинах, страницах регистрации событий, во время технического
//? обслуживания и т.д.
//? Плагин ожидает следующую HTML-разметку и показывает четыре цифры:
//? дни, часы, минуты и секунды в формате XX: XX: XX: XX.Количество дней может
//? состоять из более чем двух цифр.
//? Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
//? Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

const refs = {
  days: document.querySelector("[data-value=days]"),
  hours: document.querySelector("[data-value=hours]"),
  mins: document.querySelector("[data-value=mins]"),
  secs: document.querySelector("[data-value=secs]"),
};

const timer = {
  start() {
    const startTime = new Date("Jul 17, 2021");
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
