let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function nextSlide() {

  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
  
}

function prevSlide() {

  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function autoRotate() {
  nextSlide();
  setTimeout(autoRotate, 5000); 
  // Change slide every 3 seconds
}

autoRotate();

function playPause() {
  var video = document.getElementById("resetVideo");
  var playButton = document.querySelector(".play-button");

  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
}

function resetVideo(video) {
  // Pause the video and reset the currentTime to 0
  video.pause();
  video.currentTime = 0;

  // Show the play button after resetting the video
  playButton.style.display = "block";
}

$("a").mouseenter((event) => {
  $(`#${event.target.id}`).css("color", "darkred");
  $(`#${event.target.id}`).animate({fontSize: '22px'},300, "linear");
});
$("a").mouseleave((event) => {
  $(`#${event.target.id}`).css("color", "black");
  $(`#${event.target.id}`).animate({fontSize: '20px'}, 400, "linear");

});

$(document).ready(function() {
  $(window).scroll(function() {
    var scrolledPixels = $(window).scrollTop();
    if(scrolledPixels > 200){
      $(".navigation").removeClass("nav1");
      $(".navigation").addClass("fix")
  }
  else {
  $(".navigation").removeClass("fix");
  $(".navigation").addClass("nav1");
}
  });
});

$(document).ready(function(){
  $('#home').click(function(){
      window.location.href = "../index.html"; // Replace 'next-page.html' with the URL of the next page
  });
});