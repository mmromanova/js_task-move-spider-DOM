'use strict';

document.addEventListener('click', (ev) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = ev.clientX - wallRect.left - spider.clientWidth / 2;
  let newTop = ev.clientY - wallRect.top - spider.clientHeight / 2;

  if (newTop < 0) {
    newTop = 0;
  } else if (newTop + spider.clientHeight + 20 > wallRect.height) {
    newTop = wallRect.height - spider.clientHeight - 20;
  }

  if (newLeft < 0) {
    newLeft = 0;
  } else if (newLeft + spider.clientWidth + 20 > wallRect.width) {
    newLeft = wallRect.width - spider.clientWidth - 20;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
