const cards = [...document.querySelectorAll('.work-card')];
const domainButtons = [...document.querySelectorAll('.domain-bubble')];
let selectedTag = 'all';

function updateResults() {
  cards.forEach((card) => {
    card.hidden = selectedTag !== 'all' && !card.dataset.tags.split(',').includes(selectedTag);
  });
}

domainButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedTag = selectedTag === button.dataset.filter ? 'all' : button.dataset.filter;
    domainButtons.forEach((item) => {
      const active = item.dataset.filter === selectedTag;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updateResults();
    document.querySelector('#selected-work')?.scrollIntoView();
  });
});

const portrait = document.querySelector('.seam-portrait');
function updatePortraitVisibility() {
  const hide = window.innerWidth > 800 && window.scrollY > Math.min(200, window.innerHeight * .25);
  portrait?.classList.toggle('is-scrolled', hide);
}
window.addEventListener('scroll', updatePortraitVisibility, { passive: true });
window.addEventListener('resize', updatePortraitVisibility);
updatePortraitVisibility();
