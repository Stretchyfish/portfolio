const portfolioLayout = document.querySelector('.portfolio-layout');
const profileName = document.querySelector('.profile-name');

function alignProfileEdge() {
  if (!portfolioLayout || !profileName) return;
  if (window.innerWidth <= 900) {
    portfolioLayout.style.removeProperty('--profile-width');
    return;
  }

  const nameRight = profileName.getBoundingClientRect().right;
  portfolioLayout.style.setProperty('--profile-width', `${Math.ceil(nameRight + 24)}px`);
}

alignProfileEdge();
window.addEventListener('resize', alignProfileEdge);
document.fonts?.ready.then(alignProfileEdge);

const infoButtons = [...document.querySelectorAll('.info-bubble')];
const infoSearch = document.querySelector('#info-search');
const infoItems = [...document.querySelectorAll('.info-item')];
const infoStatus = document.querySelector('#info-status');
let selectedInfoCategory = '';

function updateInfo() {
  if (!infoSearch || !infoStatus) return;

  const query = infoSearch.value.trim().toLocaleLowerCase();
  let matches = 0;

  infoItems.forEach((item) => {
    const matchesCategory = !selectedInfoCategory || item.dataset.infoTags.split(',').includes(selectedInfoCategory);
    const matchesSearch = !query || item.dataset.search.includes(query);
    item.hidden = !matchesCategory || !matchesSearch;
    if (!item.hidden) matches++;
  });

  infoStatus.textContent = matches === 0 ? 'No matches found. Try another search or category.' : `${matches} ${matches === 1 ? 'entry' : 'entries'}`;
}

infoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedInfoCategory = selectedInfoCategory === button.dataset.infoCategory ? '' : button.dataset.infoCategory;
    infoButtons.forEach((item) => item.setAttribute('aria-pressed', String(item.dataset.infoCategory === selectedInfoCategory)));
    updateInfo();
  });
});

infoSearch?.addEventListener('input', updateInfo);

const workDialog = document.querySelector('#work-dialog');
const workDetails = [...document.querySelectorAll('.work-dialog-detail')];

document.querySelectorAll('a[data-work-id]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !workDialog?.showModal) return;

    const selected = workDetails.find((detail) => detail.dataset.detailId === link.dataset.workId);
    if (!selected) return;

    event.preventDefault();
    workDetails.forEach((detail) => { detail.hidden = detail !== selected; });
    workDialog.scrollTop = 0;
    workDialog.showModal();
  });
});

workDialog?.querySelector('.work-dialog-close')?.addEventListener('click', () => workDialog.close());
workDialog?.addEventListener('click', (event) => {
  if (event.target !== workDialog) return;
  const bounds = workDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) workDialog.close();
});

