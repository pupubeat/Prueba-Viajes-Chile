// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// AdHover fadeOut&fadeIn en Bootstrap Cards
$(".card").hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(250);
});

// Alert en Button de formulario
$("#mailme").click(function () {
    alert("¡Tu mensaje ha sido envíado!")
})