$(document).ready(function() {
    $('.menu li a').click(function() {
        $('.menu li a').removeClass("active");
        $(this).toggleClass('active');

        // $('nav ul').toggleClass('active-menu');
        
    })
})