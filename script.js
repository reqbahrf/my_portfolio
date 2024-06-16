document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.imageCont');
  const images = document.querySelectorAll('.itemImg');

  let maxHeight = 0;

  images.forEach((image) => {
    const height = image.offsetHeight;

    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  container.style.height = `${maxHeight}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#prototypeImg .itemImg');

  window.addEventListener('scroll', () => {
    const scrollLeft = window.scrollY;

    images.forEach((image, index) => {
     const factor = (index * window.innerWidth) / 3400;// Adjust this value to change the rate of movement
      image.style.transform = `translateX(${scrollLeft * factor}px)`;
    });
  });
});