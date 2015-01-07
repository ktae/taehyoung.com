$(document).ready(function() {
    
    doStuff();
    
    $(window).resize(function () {
        
        doStuff();
        
    });
    
});

function doStuff() {
    
    var windowHeight = $(window).height();
    var bannerHeight = $('.banner').height();
    
    var bannerOffset = (windowHeight-bannerHeight)/2;
    
    var homeHeight = (windowHeight < 345 ? 345 : windowHeight);
        
    $('#home').css('height', homeHeight);
    
    $('.push-down').css('height', bannerOffset);
    
}