var smartLabel = document.querySelector('.contact__form--smart-label', '.subscribe-modal--email');
smartLabel.addEventListener('keyup', addClass);

function addClass(event) {
    if(event.target.value === '') {
        $(event.target).removeClass('is-focused')
    }
    else {
        $(event.target).addClass('is-focused')
    }
}

function initMap() {
    var yerevan = {lat: 40.177200, lng: 44.503490};
    var map = new google.maps.Map(
        document.getElementById('google-map'), {zoom: 13, center: yerevan});
    var marker = new google.maps.Marker({position: yerevan, map: map});
}

const countDownDate = new Date("Dec 4, 2021 22:55:25").getTime();

let timer = setInterval(function() {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let dayText = (days > 1) ? "Days" : "Day";
    let hoursText = (hours > 1) ? "Hours" : "Hour";
    let minutesText = (minutes > 1) ? "Minutes" : "Minute";
    let secondsText = (seconds > 1) ? "Seconds" : "Second";

    let daysContent = (days >= 1) ? "<div><span>" + days + "</span><span>" + dayText + "</span></div>" : "";
    let hoursContent = (hours >= 1 || days !== 0) ? "<div><span>" + hours + "</span><span>" + hoursText + "</span></div>" : "";
    let minutesContent = (minutes >= 1 || hours !== 0) ? "<div><span>" + minutes + "</span><span>" + minutesText + "</span></div>" : "";
    let secondsContent = "<div><span>" + seconds + "</span><span>" + secondsText + "</span></div>";

    let timerContent = '<div class="timer">' + daysContent + hoursContent + minutesContent + secondsContent + '</div>';
    document.getElementById("countdown").innerHTML = timerContent;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    }
                });
            }
        }
    });

window.addEventListener("scroll", hidemenu);

function hidemenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("hamburger-menu").checked = false;
    }
}

var subscribeModalBtn = document.querySelector('.home__subscribe-btn');
subscribeModalBtn.addEventListener("click", modalShow);

function modalShow() {
    document.getElementById("modal").classList.add('modal--show')
}

var ModalCloseBtn = document.querySelector('.closeBtn');
ModalCloseBtn.addEventListener("click", hideModal);

function hideModal() {
    document.getElementById("modal").classList.remove('modal--show')
}

document.getElementById('sendBtn').addEventListener("click", hideModal);
