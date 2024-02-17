//Tooltip//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Ad Hover fadeOut&fadeIn en Bootstrap Cards
$(".card").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});