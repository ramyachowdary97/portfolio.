// Smooth scrolling
$('.menu li a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

// Mobile menu toggle
$('.menu-btn').click(function() {
    $('.menu').toggleClass('active');
});
