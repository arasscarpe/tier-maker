const pool = document.getElementById('pool');
const tiersWrapper = document.getElementById('tiers');
const fileInput = document.getElementById('file-input');
const shuffleBtn = document.getElementById('shuffle-btn');
const addTierBtn = document.getElementById('add-tier-btn');
const resetBtn = document.getElementById('reset-btn');
const themeToggle = document.getElementById('theme-toggle');

const defaultTiers = [
    { name: 'S', color: '#ffdd00' },
    { name: 'A', color: '#00cc44' },
    { name: 'B', color: '#0088ff' },
    { name: 'C', color: '#ddcc00' },
    { name: 'D', color: '#ff8800' },
    { name: 'E', color: '#cc00cc' },
    { name: 'F', color: '#ff0000' }
];

let draggedItem = null;

function init() {
    defaultTiers.forEach(t => createTier(t.name, t.color));
    setupDragAndDrop();
    
    if (localStorage.getItem('theme') === 'light') {
        document.body.setAttribute('data-theme', 'light');
    }
}

function createTier(name, color, isRemovable = false) {
    const row = document.createElement('div');
    row.className = 'tier-row';

    const label = document.createElement('div');
    label.className = 'tier-label';
    label.style.backgroundColor = color;
    label.contentEditable = true;
    label.innerText = name;

    const overlay = document.createElement('div');
    overlay.className = 'controls-overlay';
    overlay.contentEditable = false;

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.className = 'color-picker';
    colorPicker.value = color;
    colorPicker.addEventListener('input', (e) => {
        label.style.backgroundColor = e.target.value;
    });

    overlay.appendChild(colorPicker);

    if (isRemovable) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-tier';
        deleteBtn.innerText = '✕';
        deleteBtn.onclick = () => {
            const cards = Array.from(content.querySelectorAll('.card'));
            cards.forEach(card => pool.appendChild(card));
            row.remove();
        };
        overlay.appendChild(deleteBtn);
    }

    label.appendChild(overlay);

    label.addEventListener('blur', () => {
        if(!label.querySelector('.controls-overlay')) {
            label.appendChild(overlay);
        }
    });

    const content = document.createElement('div');
    content.className = 'tier-content drop-zone';

    row.appendChild(label);
    row.appendChild(content);
    tiersWrapper.appendChild(row);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

addTierBtn.addEventListener('click', () => {
    createTier('NEW', '#20c997', true);
});

resetBtn.addEventListener('click', () => {
    pool.innerHTML = '';
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => zone.innerHTML = '');
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

    card.appendChild(img);
    
    card.addEventListener('dragstart', () => {
        draggedItem = card;
        setTimeout(() => card.classList.add('dragging'), 0);
    });

    card.addEventListener('dragend', () => {
        draggedItem = null;
        card.classList.remove('dragging');
    });

    pool.appendChild(card);
}

function setupDragAndDrop() {
    document.addEventListener('dragover', (e) => {
        e.preventDefault();
        const container = e.target.closest('.tier-content');
        if (!container || !draggedItem) return;

        const afterElement = getDragAfterElement(container, e.clientX, e.clientY);
        if (afterElement == null) {
            container.appendChild(draggedItem);
        } else {
            container.insertBefore(draggedItem, afterElement);
        }
    });
}

function getDragAfterElement(container, x, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];
    
    let closestElement = null;
    let minDistance = Number.POSITIVE_INFINITY;

    draggableElements.forEach(child => {
        const box = child.getBoundingClientRect();
        const childCenterX = box.left + box.width / 2;
        const childCenterY = box.top + box.height / 2;
        
        const distance = Math.sqrt(Math.pow(x - childCenterX, 2) + Math.pow(y - childCenterY, 2));

        if (distance < minDistance) {
            minDistance = distance;
            closestElement = child;
        }
    });

    if (!closestElement) return null;
    
    const box = closestElement.getBoundingClientRect();
    if (x > box.left + box.width / 2) {
        return closestElement.nextSibling;
    }
    return closestElement;
}

shuffleBtn.addEventListener('click', () => {
    const cards = Array.from(pool.querySelectorAll('.card'));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        pool.appendChild(cards[j]);
    }
});

init();