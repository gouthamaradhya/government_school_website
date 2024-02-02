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


