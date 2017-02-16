// reset scroll position
window.onbeforeunload = function(){
    window.scrollTo(0,0);
}

// All the rest
document.addEventListener('DOMContentLoaded', function(){

    // Fetch and then rest the content of the logo
    var logo = document.querySelector('.logo');

    // Array content
    var titles = ['Student'];
    var title = titles[Math.floor(Math.random()*titles.length)];

    // Initialize the typewriter
    var typewriter = require('typewriter');
    var tw = typewriter(document.querySelector('.logo')).withAccuracy(100)
                                                        .withMinimumSpeed(13)
                                                        .withMaximumSpeed(18)
                                                        .build();
    // Write that header
    tw.wait(1000)
        .type('Taehyoung Kim.')
        .wait(600)
        .type(' ' + title , function(){
            document.querySelector('body').classList.add('active');
            document.querySelector('.content').classList.add('active');
        });

});
