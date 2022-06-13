// BOTÃO
function toTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
let butao = document.querySelector('#return')

function dinamicButton() {
    if (window.scrollY == 0) {
        butao.classList.add('invisible')
    } else {
        butao.classList.remove('invisible')
    }
}
window.addEventListener('scroll', dinamicButton)

// SCROLL REVEAL

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
  ScrollReveal().reveal('#carouselHOMEPAGE, .buttons', slideTop)
  ScrollReveal().reveal('#gestaodados, #frontbackend, #dsoftware', slideLeft)
  ScrollReveal().reveal('#gestaoredes, #arquitetoinf, #mobile', slideRight)