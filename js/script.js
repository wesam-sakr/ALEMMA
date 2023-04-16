$(document).ready(function(){
    $('#loading').fadeOut(500);
});

$('body').append('<a aria-label="developer portfolio" href="https://wesam-sakr.github.io/Portfolio/" accesskey="w" target="_blank"></a>')

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetHeight ;

// make nav bar static on scroll 
window.addEventListener("scroll" , function(){
    if (this.document.documentElement.scrollTop >= sticky) {
        $(navbar).addClass("bg-main-color");
    } else {
        $(navbar).removeClass("bg-main-color")
    }
})

    // counter
window.addEventListener("scroll" , function(){
    if ($(".counters").length > 0) {
        var counters = document.querySelectorAll('.counter');
        var counterStart = counters[0].offsetTop - 500;
        var speed = 200;
        if(this.document.documentElement.scrollTop > counterStart){
            counters.forEach(counter => {
                var upTo = function(){
                    var target = Number(counter.getAttribute('data-target')) 
                    var count = Number(counter.innerText)
                    var inc = Math.ceil(target / speed) ;
                    setTimeout (upTo,100)

                    if(count < target){
                        counter.innerText = count + inc ;
                    } else counter.innerText= target;
                }
                upTo();  
            });
        }
    }
        
})

$('.video .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsiveClass:true,
    rtl:true,
    autoplay:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$(".project-wrapper .items-container.owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 20,
    rtl: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
  });

