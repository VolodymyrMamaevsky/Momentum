import playList from './playList.js';
import i18next from './i18next.js';

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function showTime() {
  const currentRawDate = new Date();
  const currentTime = currentRawDate.toLocaleTimeString('ru');
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const currentDate = capitalizeFirstLetter(currentRawDate.toLocaleDateString(i18next.t('locale'), dateOptions));
  const hours = currentRawDate.getHours();
  time.textContent = currentTime;
  date.textContent = currentDate;
  greeting.textContent = `${getTimeOfDayGreeting(hours)}, `;
  setTimeout(showTime, 1000);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTimeOfDayGreeting(hours) {
  if (hours >= 6 && hours < 12) {
    timeOfDay = 'morning';
    return i18next.t('good morning');
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = 'afternoon';
    return i18next.t('good afternoon');
  }
  if (hours >= 18 && hours <= 23) {
    timeOfDay = 'evening';
    return i18next.t('good evening');
  } else {
    timeOfDay = 'night';
    return i18next.t('good night');
  }
}

showTime();
