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

ScrollReveal().reveal('.card1, .card3, .card5, .title', slideLeft)
ScrollReveal().reveal('.banner, .text, .card2, .card4, .card6', slideRight)
