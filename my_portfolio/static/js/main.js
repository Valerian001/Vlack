console.log("ready")
// preloader setup
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#preloader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#preloader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};
// Setting up the Variables
var bars = document.getElementById("nav_action");
var nav = document.getElementById("menu");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}


// setting up the text animation
var TxtRotate = function(el, toRotate, period) {

    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {

    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {

    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  // let myCarousel = document.querySelectorAll('#featureContainer .carousel .carousel-item');
  // myCarousel.forEach((el) => {
  //   const minPerSlide = 4
  //   let next = el.nextElementSibling
  //   for (var i=1; i<minPerSlide; i++) {
  //     if (!next) {
  //       // wrap carousel by using first child
  //       next = myCarousel[0]
  //     }
  //     let cloneChild = next.cloneNode(true)
  //     el.appendChild(cloneChild.children[0])
  //     next = next.nextElementSibling
  //   }
  // })

  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());
  // gtag('config', 'G-LLWL5N9CSM');

  // carousel
//   const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0],
// arrowIcons = document.querySelectorAll(".row5 i");

// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//     });
// });

// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }

// const dragStart = (e) => {
//     // updatating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     // scrolling images/carousel to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");

//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);


  // gif_image_icons
  // function gifImg(e){
  //   e.src = "/static/images/icons/shopping.gif"
  // }
  // function staImg(e){
  //   e.src = "/static/images/icons/shopping.png"
  // }

   // Progress bars
  //  $(document).ready(function() {
  //   $( function() {
  //     var progressbar = $( ".progress" ),
  //     progressLabel = $( ".progress-value" );
   
  //     progressbar.progressbar({
  //       value: false,
  //       change: function() {
  //         progressLabel.text( progressbar.progressbar( "value" ) + "%" );
  //       },
  //       complete: function() {
  //         progressLabel.text( "Complete!" );
  //       }
  //     });
   
  //     function progress() {
  //       var val = progressbar.progressbar( "value" ) || 0;
   
  //       progressbar.progressbar( "value", val + 2 );
   
  //       if ( val < 99 ) {
  //         setTimeout( progress, 80 );
  //       }
  //     }
   
  //     setTimeout( progress, 2000 );
  //   } );
  // });
  //  document.ready(function() {
  //   document.querySelector('.progress-value').css("width",
  //             function() {
  //                 return document.querySelector(this).attr("aria-valuenow") + "%";
  //             }
  //     )
  // });
//   var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("progressv");
//     var width = elem.innerHTML();
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }