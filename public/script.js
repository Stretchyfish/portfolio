const cards = [...document.querySelectorAll('.work-card')];
const tagButtons = [...document.querySelectorAll('.filter-chip')];
const typeButtons = [...document.querySelectorAll('.type-button')];
const searchInput = document.querySelector('#work-search');
const resultsLabel = document.querySelector('#results-label');
const itemCount = document.querySelector('.results-line span:last-child');
const emptyState = document.querySelector('#empty-state');
let selectedTag = 'all';
let selectedType = 'all';

function updateResults() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const hasTag = selectedTag === 'all' || card.dataset.tags.split(',').includes(selectedTag);
    const hasType = selectedType === 'all' || card.dataset.type === selectedType;
    const hasQuery = !query || card.textContent.toLowerCase().includes(query);
    const visible = hasTag && hasType && hasQuery;
    card.hidden = !visible;
    visibleCount += Number(visible);
  });

  const filters = [];
  if (selectedTag !== 'all') filters.push(selectedTag);
  if (selectedType !== 'all') filters.push(selectedType === 'project' ? 'projects' : 'experience');
  if (query) filters.push(`“${query}”`);
  resultsLabel.textContent = filters.length ? `Showing ${filters.join(' · ')}` : 'Showing all work';
  itemCount.textContent = `${String(visibleCount).padStart(2, '0')} ITEMS`;
  emptyState.hidden = visibleCount > 0;
}

tagButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedTag = button.dataset.filter;
    tagButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    updateResults();
  });
});

typeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedType = button.dataset.type;
    typeButtons.forEach((item) => item.classList.toggle('active', item === button));
    updateResults();
  });
});

searchInput?.addEventListener('input', updateResults);
