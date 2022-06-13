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
ScrollReveal().reveal('#desenvolvimento > h2', slideTop)
ScrollReveal().reveal('.card1, .card3, .title', slideLeft)
ScrollReveal().reveal('.card2, .card4, .image', slideRight)