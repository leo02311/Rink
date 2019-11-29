var textWrapper = document.querySelector('.start');
var textWrapper1 = document.querySelector('.two');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.start .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2400,
        delay: (el, i) => 300 * i
    })

anime.timeline()
    .add({
        targets: '.two .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2400,
        delay: (el, i) => 2400 + 50 * i
    })