if (window.innerWidth < 800) {
  $('.testimonials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
  });
} else {
  $('.testimonials').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
  });
}

document.querySelector('.down-arrow').addEventListener('click', (e) => {
  window.scrollBy({
    top: window.screen.height - 200,
    behavior: 'smooth',
  });
});
