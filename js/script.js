$(document).ready(function(){

    $(".menu ul li").each(function(){
        $(this).hover(function(){
            $(this).find(".dropdown").slideToggle(500);
        }); 
    });

    $(".menu ul li a,.menu-mobile ul li a").each(function(){
      $(this).click(function(){
        var item = $(this).attr("href");
        $("html,body").animate({
          scrollTop : $(item).offset().top
        },800);
        $(".menu-mobile").slideUp(500);
      });
    });

    $(".menu-mobile ul li").each(function(){
      $(this).click(function(){
        $(this).find(".dropdown").slideToggle(500);
      });

      $(".fa-bars").click(function(){
        $(".menu-mobile").slideDown(500);
      });
      $(".fa-times").click(function(){
        $(".menu-mobile").slideUp(500);
      });
    });

    $(".fa-comment").click(function(){
      $(".chats").animate({
        right:"0"
      },400);
    });
    $(".close-chat").click(function(){
      $(".chats").animate({
        right:"-100%"
      },400);
    });

    
    $(".pages ul li a").each(function(){
      $(this).click(function(){
        disableLink();
        $(this).addClass("active");

      });
    });
    function disableLink(){
      var link=document.querySelectorAll(".pages ul li a");
      for(var i=0;i<link.length;i++){
        link[i].classList.remove("active");
      }
    }

    
    

});


// Slider
var btnNext = document.querySelector(".next");
var btnPrev = document.querySelector(".prev");
var images = document.querySelectorAll(".slider-item");
var i = 1;
btnNext.addEventListener("click", nextImage);
btnPrev.addEventListener("click", prevImage);

function myfunc(){
  displayImage();
  images[i].classList.add("activeSlider");
  i++;
  if (i > images.length-1) {
    i = 0;
  }
}
setInterval(myfunc,5000);

function nextImage() {
  displayImage();
  images[i].classList.add("activeSlider");
  i++;
  if (i > images.length-1) {
    i = 0;
  }
}
function prevImage() {
  displayImage();
  images[i].classList.add("activeSlider");
  if (i < 1) {
    i = images.length;
  }
  i--;
}

function displayImage() {
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("activeSlider");
  }
}