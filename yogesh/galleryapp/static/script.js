
const images = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src; 
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
