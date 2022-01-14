const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
