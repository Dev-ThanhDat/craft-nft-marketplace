// menu
const toggleMenu = document.querySelector('.js-bar');
const menu = document.querySelector('.js-menu');
const toggleClose = document.querySelector('.js-close');

toggleMenu.addEventListener('click', function () {
  menu.classList.toggle('active');
});

toggleClose.addEventListener('click', function () {
  menu.classList.remove('active');
});

// Product
const accordionHeaders = document.querySelectorAll('.product-accordion-header');
[...accordionHeaders].forEach((item) =>
  item.addEventListener('click', handleClickAccordion)
);
const activeStr = 'is-active';
function handleClickAccordion(e) {
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr);
  if (!content.classList.contains('is-active')) {
    content.style.height = '0px';
  }
  const icon = e.target.querySelector('.icon');
  icon.classList.toggle('fa-angle-down');
  icon.classList.toggle('fa-angle-up');
}

// FAQ
const accordionHeadersFAQ = document.querySelectorAll('.faq-accordion-header');
const accordion = document.querySelectorAll('.faq-accordion');
[...accordionHeadersFAQ].forEach((item) =>
  item.addEventListener('click', handleClickAccordion)
);
const activeStr2 = 'is-active';
function handleClickAccordion(e) {
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(activeStr2);
  if (!content.classList.contains('is-active')) {
    content.style.height = '0px';
  }
  const icon = e.target.querySelector('.faq-icon');
  icon.classList.toggle('fa-plus');
  icon.classList.toggle('fa-minus');
}
