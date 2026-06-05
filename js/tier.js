const tiersWrapper = document.getElementById('tiers');

function createTier(name, color) {
    const row = document.createElement('div');
    row.className = 'tier-row';

    const label = document.createElement('div');
    label.className = 'tier-label';
    label.style.backgroundColor = color;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'tier-name';
    nameSpan.contentEditable = true;
    nameSpan.innerText = name;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'control-btn delete-tier-btn';
    deleteBtn.innerText = '✕';
    deleteBtn.onclick = () => {
        const contentZone = row.querySelector('.tier-content');
        const cards = Array.from(contentZone.querySelectorAll('.card'));
        const pool = document.getElementById('pool');
        cards.forEach(card => pool.appendChild(card));
        row.remove();
    };

    const colorWrapper = document.createElement('div');
    colorWrapper.className = 'color-picker-wrapper';

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.className = 'color-picker';
    colorPicker.value = color;
    colorPicker.addEventListener('input', (e) => {
        label.style.backgroundColor = e.target.value;
    });

    colorWrapper.appendChild(colorPicker);

    label.appendChild(deleteBtn);
    label.appendChild(nameSpan);
    label.appendChild(colorWrapper);

    const content = document.createElement('div');
    content.className = 'tier-content drop-zone';

    row.appendChild(label);
    row.appendChild(content);
    tiersWrapper.appendChild(row);
}