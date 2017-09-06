$(document).ready(function(){
    $status = $(".status");
    var options = {
        autoPlay: true,
        autoPlayDelay: 4000,
        pauseOnHover: false,
        hidePreloaderDelay: 500,
        nextButton: false,
        prevButton: false,
        pauseButton: false,
        preloader: false,
        hidePreloaderUsingCSS: false,                   
        animateStartingFrameIn: true,    
        navigationSkipThreshold: 750,
        preventDelayWhenReversingAnimations: true,
        customKeyEvents: {
            80: "pause"
        }
    };

    var sequence = $("#slide").sequence(options).data("slide");

    sequence.afterNextFrameAnimatesIn = function() {
        if(sequence.settings.autoPlay && !sequence.hardPaused && !sequence.isPaused) {
            $status.addClass("active").css("opacity", 1);
        }
        $(".prev, .next").css("cursor", "pointer").animate({"opacity": 1}, 500);
    };
    sequence.beforeCurrentFrameAnimatesOut = function() {
        if(sequence.settings.autoPlay && !sequence.hardPaused) {
            $status.css({"opacity": 0}, 500).removeClass("active");
        }
        $(".prev, .next").css("cursor", "auto").animate({"opacity": .7}, 500);
    };
    sequence.paused = function() {
        $status.css({"opacity": 0}).removeClass("active").addClass("paused");
    };
    sequence.unpaused = function() {
        if(!sequence.hardPaused) {
            $status.removeClass("paused").addClass("active").css("opacity", 1)
        }               
    };
});