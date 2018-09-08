

document.getElementById("introVideo").onmouseover = function() {
  mouseOver()
};
document.getElementById("introVideo").onmouseout = function() {
  mouseOut()
};


var vid = document.getElementById("introVideo");


function mouseOver() {
  vid.play();
};

function mouseOut() {
  vid.pause();
};





var myAudio = document.getElementById("audio");
var isPlaying = false;

function play() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};






$(document).ready(function() {

    /*Når man scroller vinduet */
    $(window).scroll( function(){

        /* Tjek positionen af alle .text elementer */
        $('.text').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /*Hvis objektet er fuldt synlig i vinduet fader det ind */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});
