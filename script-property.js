$(document).ready(function(){
    $('.carousel').carousel();

    // function for next slide
    $('.next').click(function(){
        $('.carousel').carousel('next');
    });

    // function for prev slide
    $('.prev').click(function(){
        $('.carousel').carousel('prev');
    });
});