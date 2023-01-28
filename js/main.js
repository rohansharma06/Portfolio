AOS.init({
  duration: 800,
  easing: "slide",
});

//scroll down
function scrollDown(pos) {
  var elem = document.getElementById(pos);
  var target = elem.offsetTop;

  var currPos = 0;
  var scroll = setInterval(function () {
    if (currPos >= target) {
      clearInterval(scroll);
      return;
    }
    currPos += 50;
    window.scrollBy(0, 50);
  }, 10);
}

// skill start
var progressBar = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skill-container");
window.addEventListener("scroll", checkScroll);
var animation = false;

function initialiseBar() {
  for (let bar of progressBar) {
    bar.style.width = 0 + "%";
  }
}
initialiseBar();

function fillBar() {
  for (let bar of progressBar) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currenWidth = 0;
    let interval = setInterval(function () {
      if (currenWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currenWidth++;
      bar.style.width = currenWidth + "%";
    }, 5);
  }
}

function checkScroll() {
  var coordinates = skillsContainer.getBoundingClientRect();
  if (!animation && coordinates.top <= window.innerHeight) {
    animation = true;
    console.log("skill-bar-reach");
    fillBar();
  } else if (coordinates.top > window.innerHeight) {
    animation = false;
  }
}
// skill ends
function showMore() {
  var button = document.getElementById("show-more");
  var button1 = document.getElementById("show-less");
  var extra_project = document.getElementById("extra-project");
  button.classList.toggle("no-btn");
  button1.classList.toggle("no-btn");
  extra_project.classList.toggle("no-btn");
  //console.log(button);
}

function CertyshowMore() {
  var button = document.getElementById("show_more");
  var button1 = document.getElementById("show_less");
  var extra_certy = document.getElementById("extra-certy");
  button.classList.toggle("no-btn");
  button1.classList.toggle("no-btn");
  extra_certy.classList.toggle("no-btn");
}
//---btn-show-hide

(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      event.preventDefault();

      if ($("#ftco-nav").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };
  burgerMenu();

  var onePageClick = function () {
    $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, "href");

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        500,
        function () {
          // window.location.hash = href;
        }
      );
    });
  };

  onePageClick();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            ","
          );
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
})(jQuery);


let companyData = {
  "bng" : {
    "title": "BlackNgreen",
    "work": [
      "Developing a user management system for enterprise applications.Creating a robust and customizable system for managing user accounts,roles,permissions, and payments.",
      "Implementing role-based access control (RBAC) to ensure that only authorized users have access to certain features of the application. This included creating and managing userroles, and assigning roles.",
      "Developing a sturdy system to build scalable and maintainable systems for storing data for various promotions (USSD, IVR, and SMS) for divergent customers.",
      "Exposure: Java, Spring-Boot, microservices, RESTful API, security and SQL.",
      "Developing Web flow for various services from where users can subscribe for service.",
      "Responsible for creating an internal portal that will be used to blacklist and whitelist numbers during the various wap promotion.",
      "Technologies: HTML, CSS, Javascript, PHP, and SQL."
    ]
  },
  "zealth" : {
    "title": "Zealth-AI",
    "work": [
      "Worked on the official product CareShare of Zealth-AI.",
      "Developed the Reports uploading user interface for Zealth web app",
      "Developed in-App notifications support for various features.",
      "Created eye-catching and functional design to strengthen company brand and identity.",
      "Technologies: HTML, CSS, and Javascript."
    ]
  },
  "ericsson" : {
    "title": "Ericsson",
    "work": [
      'Interned under the "Talent Development Program by Ericsson" on Telecom tech.',
      "Part of BO Cloud Domain. Worked on various OpenStack components to monitor and maintain various Ericsson cloud."
    ]
  }
};
function shoeCompanyDetails(companyName){
  let data = companyData[companyName];
  let detailsArray = data["work"];
  document.getElementById("companyModalLabel").innerHTML = data["title"];
  
  var ul = document.createElement('ul');
  for(let i=0;i<detailsArray.length;i++){
    let li = document.createElement('li');
    li.innerHTML = detailsArray[i];
    ul.appendChild(li);
  }
  // console.log(data["work"].length);

  let workDetails = document.getElementById("workDetails");
  workDetails.innerHTML = "";
  workDetails.appendChild(ul);
  document.getElementById("companyWorkBtn").click();
}