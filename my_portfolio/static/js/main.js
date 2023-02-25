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