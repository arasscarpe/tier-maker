let draggedItem = null;

function setupDragAndDrop() {
    document.addEventListener('dragstart', (e) => {
        if (e.target.closest('.card')) {
            draggedItem = e.target.closest('.card');
            setTimeout(() => draggedItem.classList.add('dragging'), 0);
        }
    });

    document.addEventListener('dragend', (e) => {
        if (draggedItem) {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        }
    });

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
        const container = e.target.closest('.drop-zone');
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