//this is only for demonstration of different fly-in directions
var changeClass = function(name){
  $('#search, #nav ul').removeAttr('class').addClass(name);

}


  /*##################### CAMERA BANNER ############################*/

$(function(){
  
  jQuery('#slider').camera({
    height: '49%',
    loader: 'none',
    pagination: false,
    thumbnails: false,
    navigation: false,
    hover: false,
    opacityOnGrid: false,
    imagePath: '',

  });         

});

/*##################### End CAMERA BANNER ############################*/

/*##################### OWL CAROUSEL ############################*/

$(document).ready(function() {

   $("#galery_owl").owlCarousel({
    autoplay: true,
    loop:true,
    center: false,
    items : 6, 
    navText:  false,
    dots: false,       
    nav : true,
    mouseDrag:true,
    lazyLoad : false,
    smartSpeed: 1400,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:4
        },
        1000:{
            items:4
        }
    }
      }); 
                  
 });   

/*##################### End OWL CAROUSEL ############################*/

/*##################### Div Parallax ############################*/

$(document).ready(function() {
  //parallax scroll
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
        });
      }
    });
  });
});


/*##################### END Div Parallax ############################*/

/*##################### START PRETTY PHOTO ############################*/

 jQuery("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});

 /*##################### END PRETTY PHOTO ############################*/