const pool = document.getElementById('pool');
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const addTierBtn = document.getElementById('add-tier-btn');
const resetBtn = document.getElementById('reset-btn');

const defaultTiers = [
    { name: 'S', color: '#ff7f7f' },
    { name: 'A', color: '#ffbf7f' },
    { name: 'B', color: '#ffff7f' },
    { name: 'C', color: '#7fff7f' },
    { name: 'D', color: '#7fbfff' },
    { name: 'E', color: '#7f7fff' },
    { name: 'F', color: '#ff7fff' }
];

function init() {
    defaultTiers.forEach(t => createTier(t.name, t.color));
    setupDragAndDrop();
}

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            createCard(event.target.result);
        };
        reader.readAsDataURL(file);
    });
    fileInput.value = '';
});

function createCard(src) {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;

    const img = document.createElement('img');
    img.src = src;

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-card';
    delBtn.innerHTML = '✕';
    delBtn.onclick = (e) => {
        e.stopPropagation();
        card.remove();
    };

    card.appendChild(img);
    card.appendChild(delBtn);
    pool.appendChild(card);
}

shuffleBtn.addEventListener('click', () => {
    const cards = Array.from(pool.querySelectorAll('.card'));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        pool.appendChild(cards[j]);
    }
});

addTierBtn.addEventListener('click', () => {
    createTier('NEW', '#aaaaaa');
});

resetBtn.addEventListener('click', () => {
    pool.innerHTML = '';
    const dropZones = document.querySelectorAll('.tier-content');
    dropZones.forEach(zone => zone.innerHTML = '');
});

init();