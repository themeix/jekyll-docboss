/*
=====================
JS Table of Conttent 
=====================
01. Preloader
02. Sticky Header
03. Mobile Menu  
04. AOS Animation 
05. Current Date
06. Magnific Popup
07. Slick Slider
08. InfiniteScroll
09. Masonry Grid
09. Scroll to Top
10. Tab 
*/
(function ($) {
  "use strict";
  /*
------------------------  
01. Preloader
--------------------------
*/
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(10);
  }); 
  /*
  ------------------------  
  03. Mobile Menu 
  --------------------------
  */
  $(".mobile-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".mobile-menu").slideToggle();
  });
  $(".sub-toggle").on("click", function () {
    if ($(this).text().includes("-")) {
      $(this).text("+")
    } else {
      $(this).text("-")
    }
    $(this).parent().siblings(".dropdown-menu").slideToggle();
  });
  /*
  ------------------------  
  04. AOS Animation
  --------------------------
  */
  AOS.init({ 
    offset: 50,
    delay: 0,
    duration: 800,
    easing: 'ease-in-out',
    debounceDelay: 20,
    throttleDelay: 50,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
  /*
  ------------------------  
  05. Current Date
  --------------------------
  */
  $('#spanYear').html(new Date().getFullYear());
  /*
  ------------------------  
  06. Magnific Popup
  --------------------------
  */
  $('.popup-with-form').magnificPopup({ 
    type: 'inline',
    fixedContentPos: false,
    alignTop: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',
    callbacks: {
      open: function () {
        $('body').addClass('my-mfp-slide-main');
      },
      close: function () {
        setTimeout(function () {
          $('body').removeClass('my-mfp-slide-main');
        }, 100)
      }
    }
  });
  $('.video-popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	}); 
  /*
  ------------------------  
  07. Slick Slider
  --------------------------
  */
  $('.author-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    arrows: false,
    dots: true,
    draggable: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.popular-topics-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    arrows: false, 
    dots: true,
    draggable: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
 
  /*
  ------------------------  
   08. InfiniteScroll
  --------------------------
  */
  $('.topics-loading').infiniteScroll({
    // options
    path: function () {
      // no value returned after 4th loaded page
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `topics/topics-${nextIndex}.html`;
      }
    },
    append: '.topic-item',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });


  /*
  ------------------------   
   09. Masonry Grid
  -------------------------- 
  */
  jQuery(window).on('load', function(){
  var $grid = $('.masonry-grid').masonry({
    percentPosition: true, 
    itemSelector: '.post-item',  
    gutter: 32,         
  });  
}); 
  /*
  ------------------------  
   09. Scroll to Top
  --------------------------
  */
  function scrolltop() {
    var wind = $(window);
    wind.on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 500) {
        $(".scroll-top-button").fadeIn("slow");
      } else {
        $(".scroll-top-button").fadeOut("slow");
      }
    });
  }
  scrolltop(); 
  /*
  ------------------------  
   10. Tab
  --------------------------
  */
  $("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });
  
  $(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
  });
  
  /*
  ------------------------  
   11. Chart
  --------------------------
  */

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: '#0052D4',
      borderColor: '#0052D4',
      data: [0, 10, 5, 2, 20, 30, 45], 
    }]
  }; 
  const config = {
    type: 'line', 
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}(jQuery)); 