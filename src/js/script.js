window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

//Slider
var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var $carousel = $('[data-carousel]').flickity(options);
var $slideContent = $('.slide-content');
var flkty = $carousel.data('flickity');
var selectedSlide = flkty.selectedElement;

flkty.on('settle', function (index) {
    selectedSlide = flkty.selectedElement;
});

flkty.on('change', function (index) {
    $slideContent.eq(index).removeClass('mask');

    setTimeout(function () {
        $slideContent.addClass('mask');
    }, 500);
});
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("category");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky1) {
        header.classList.add("sticky1");
    } else {
        header.classList.remove("sticky1");
    }
}