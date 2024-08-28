// accordion.js
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const buttonIcon = item.querySelector('.accordion-button i');
    const content = item.querySelector('.accordion-body');
    
    header.addEventListener('click', () => {
        const isExpanded = item.getAttribute('data-expanded') === 'true';

        // Close all other accordion items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.setAttribute('data-expanded', 'false');
                otherItem.querySelector('.accordion-body').style.maxHeight = null;
                otherItem.querySelector('.accordion-button i').classList.replace('icon-minus', 'icon-plus');
            }
        });

        if (isExpanded) {
            item.setAttribute('data-expanded', 'false');
            content.style.maxHeight = null;
            buttonIcon.classList.replace('icon-minus', 'icon-plus');
        } else {
            item.setAttribute('data-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + "px";
            buttonIcon.classList.replace('icon-plus', 'icon-minus');
        }
    });
});