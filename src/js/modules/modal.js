// modal.js
const calendarModal = document.getElementById("calendar-modal");
const contactModal = document.getElementById("contact-modal")
const calendarModalBtn = document.getElementById("calendar-modal-btn");
const contactModalBtn = document.getElementById("contact-modal-btn")
const closeModalBtn = document.querySelectorAll(".close-modal");

const openModal = (modal) => {
    const modalContent = modal.querySelector('.modal-content');

    if (modal.style.display !== "flex") {
        modal.style.display = "flex";
        document.body.classList.add('lock');

        gsap.fromTo(modalContent,
            { y: '-150%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }
        );
    }
};

const closeModal = (modal) => {
    const modalContent = modal.querySelector('.modal-content');

    if (modal.style.display === "flex") {
        gsap.to(modalContent,
            {
                y: '-150%',
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    modal.style.display = "none";
                    document.body.classList.remove('lock');
                }
            }
        );
    }
};

// Open the modal
calendarModalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal(calendarModal);
});

contactModalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal(contactModal);
});

// Close the modal when the user clicks on <span> (x)
closeModalBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const modal = btn.closest('.modal-content').parentNode;
        closeModal(modal);
    });
});

// Close the modal when the user clicks anywhere outside of the modal content
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});