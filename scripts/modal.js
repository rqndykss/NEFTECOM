const modal = document.getElementById('documentsModal');
const modalImage = document.getElementById('documentsModalImage');

const images = document.querySelectorAll('.doc-img');
const closeButton = document.querySelector('.documents-modal__close');

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.classList.add('documents-modal--active');
        modalImage.src = image.src;
    });
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('documents-modal--active');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('documents-modal--active');
    }
});