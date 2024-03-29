"use strict";

export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  loadFromStorage,
  saveToStorage,
  animateCSS,
  debounce,
  formatTime,
};

function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

function makeLorem(size = 100) {
  var words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  var txt = "";
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return txt;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function animateCSS(el, animation) {
  const prefix = "animate__";
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    el.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      el.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }
    el.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
}

function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function formatTime(millSec) {
  let time = millSec;
  const day = 1000 * 60 * 60 * 24; //day by milSecond

  if (Date.now() - time < day) {
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ":" + minutes.substr(-2);

    return formattedTime;
  }
  let date = new Date(time);
  let month = date.getMonth();
  let year = "0" + date.getFullYear();
  year = year.slice(0, 2);
  if (month < 10) month = "0" + month;
  let formattedTime = month + "/" + year.substr(-2);
  return formattedTime;
}
