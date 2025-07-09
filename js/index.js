'use strict';

{
  const images = ['/画像/Number-logo-simple-57.png','/画像/Number-logo-simple-58.png','/画像/Number-logo-simple-59.png','/画像/Number-logo-simple-60.png','/画像/Number-logo-simple-61.png',]
  const slideImg = document.getElementById('slide-img');
  const prev = document.getElementById('prev');
  const page = document.getElementById('page');
  const next = document.getElementById('next');
  let current = 0;

  page.textContent = `1/${images.length}`

  next.addEventListener('click',function() {
    if( current + 1 < images.length) {
      current++;
      slideImg.src = images[current];
    }
    page.textContent = `${current + 1}/${images.length}`
  });

  prev.addEventListener('click',function() {
    if( current > 0) {
      current--;
      slideImg.src = images[current];
    }
    page.textContent = `${current + 1}/${images.length}`
  });
}