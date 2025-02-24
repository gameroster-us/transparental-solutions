$(document).ready(function() {
  // Hero slider
  var owl = $('.heroslider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout:9000,
    autoplayHoverPause: true,
    nav: true,
  });
  $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
  });

// we offer slider
  var owl = $('.weOffer');
  owl.owlCarousel({
    nav: false,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
       
      },
      600: {
        items: 2,
       
      },
      1000: {
        items: 3,
        
       
      }}
  });
  $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
  })
//
var owl = $('.testimonial');
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // animateOut: "fadeOutRight",
  animateIn: "fadeInRight",
  animSpeed: 600,
});

//
var owl = $('.recent-work');
  owl.owlCarousel({
    items:4,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
       
      },
      600: {
        items: 3,
       
      },
      1000: {
        items: 4,
        
       
      }}
  });
  $('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
  })

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });
    });
// scrollTop init	
var totop = $('#scrollUp');    
win.on('scroll', function() {
    if (win.scrollTop() > 150) {
        totop.fadeIn();
    } else {
        totop.fadeOut();
    }
});
totop.on('click', function() {
    $("html,body").animate({
        scrollTop: 0
    }, 500)
});

  // Menu
   // onepage nav
   var navclose = $('#onepage-menu');
   if(navclose.length){
       $(".nav-menu li a").on("click", function () {
           if ($(".showhide").is(":visible")) {
               $(".showhide").trigger("click");
           }
       });
       if ($.fn.onePageNav) {
           $(".nav-menu").onePageNav({
               currentClass: "active-menu"
           });
        }
    }
    var searchParent = $('.search-parent');
    if(searchParent.length){ 
        $( ".search-parent" ).on( "click", function() {
          $( this).toggleClass( "open_add_class", 1000 );
        });
    }

    // collapse hidden  
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });  

      //canvas menu
    var navexpander = $('#nav-expander, #nav-expander2');
    if(navexpander.length){
        $('#nav-expander, #nav-expander2, #nav-close, #nav-close2, .offwrap').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }

   
    
	$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({end: 582,duration: 2000});
$('#number2').jQuerySimpleCounter({end: 215,duration: 2000});
$('#number3').jQuerySimpleCounter({end: 25,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 70,duration: 2000});


$('#Projects_completed').jQuerySimpleCounter({end: 45,duration: 2000});
$('#Experienced_people').jQuerySimpleCounter({end: 20,duration: 2000});
$('#experience').jQuerySimpleCounter({end:10,duration: 2000});
$('#awards').jQuerySimpleCounter({end: 12,duration: 2000});
/******** Mobile Menu Start ********/
    
$('.mobile-navbar-menu a').each(function(){
  var href = $(this).attr("href");
  if(href ="#"){
      $(this).addClass('hash');
  }else{
      $(this).removeClass('hash');
  }
});

$.fn.menumaker = function(options) {
var mobile_menu = $(this), settings = $.extend({
  format: "dropdown",
  sticky: false
}, options);

  return this.each(function() {
  mobile_menu.find('li ul').parent().addClass('has-sub');
  var multiTg = function() {
      mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
      mobile_menu.find(".hash").parent().addClass('hash-has-sub');
      mobile_menu.find('.submenu-button').on('click', function() {
          $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open-sub')) {
              $(this).siblings('ul').removeClass('open-sub').hide('fadeIn');
              $(this).siblings('ul').hide('fadeIn');                                     
          }
          else {
              $(this).siblings('ul').addClass('open-sub').hide('fadeIn');
              $(this).siblings('ul').slideToggle().show('fadeIn');
          }
      });
  };

  if (settings.format === 'multitoggle') multiTg();
  else mobile_menu.addClass('dropdown');
  if (settings.sticky === true) mobile_menu.css('position', 'fixed');
 var resizeFix = function() {
      if ($( window ).width() > 991) {
          mobile_menu.find('ul').show('fadeIn');
          mobile_menu.find('ul.sub-menu').hide('fadeIn');
      }          
  };
  resizeFix();
  return $(window).on('resize', resizeFix);
  });
};

$(document).ready(function(){
  $("#mobile-navbar-menu").menumaker({
  format: "multitoggle"
  });
});

  /* AUTHOR LINK */
   $('.about-me-img').hover(function(){
          $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
      }, function(){
          $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
      });

     
})