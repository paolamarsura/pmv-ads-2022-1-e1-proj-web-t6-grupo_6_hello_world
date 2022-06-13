// ScrollReveal
var slideLeft = {
    origin: 'left',
    distance: '60px',
    duration: 700,
    reset: true
}
var slideRight = {
    origin: 'right',
    distance: '60px',
    duration: 700,
    reset: true
}
var slideTop = {
    origin: 'top',
    distance: '60px',
    duration: 700,
    reset: true
}
ScrollReveal().reveal('.title', slideTop)
ScrollReveal().reveal('.video1, .video3', slideLeft)
ScrollReveal().reveal('.video2', slideRight)