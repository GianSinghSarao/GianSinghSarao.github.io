/* Defines Vars */
var slider;
var currentSlide;
var interval;
var slideInterval;
var next;
var previous;
var pauseButton;
var playing;
var sliderInit = function() {
    /* Defines Vars */
    slider = document.querySelectorAll('#slider .slide');
    currentSlide = 0;
    /* Interval Must Be A Number In Milliseconds, 1 Second = 1000 */
    interval = 2000
    slideInterval = setInterval(nextSlide, interval);
    /* Buttons */
    next = document.querySelector('.controls#next');
    previous = document.querySelector('.controls#previous');
    pauseButton = document.querySelector('.controls#pause');
    /* Autoplay */
    playing = true;
};
var eventListenerInit = function() {
    /* Add Event Listener for Pause Button */
    pauseButton.onclick = function() {
        if (playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };
    /* Add Event Listeners for Next And Previous Buttons*/
    next.onclick = function() {
        pauseSlideshow();
        nextSlide();
    };
    previous.onclick = function() {
        pauseSlideshow();
        previousSlide();

    };
}
/* Functions */
function goToSlide(n) {
    slider[currentSlide].className = 'slide';
    currentSlide = (n + slider.length) % slider.length;
    slider[currentSlide].className = 'slide visible';
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function pauseSlideshow() {
    /* Play Character */
    pauseButton.innerHTML = '<!-- Play Button Icon --><i class="material-icons">&#xE039;</i>';
    /* Stop Autoplay */
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    /* Pause Character */
    pauseButton.innerHTML = '<!-- Pause Button Icon --><i class="material-icons">&#xE036;</i>';
    /* Start Autoplay */
    playing = true;
    slideInterval = setInterval(nextSlide, interval);
}
