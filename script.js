const iconsEl = document.querySelectorAll('.section-hero-icons i')
let idx = 0

const toggleClass = () => {
  iconsEl[idx].classList.add('show')
  if (idx > 0) {
    iconsEl[idx - 1].classList.remove('show')
  } else {
    iconsEl[iconsEl.length - 1].classList.remove('show')
  }

  idx++
  if (idx === iconsEl.length) {
    idx = 0
  }
}

setInterval(() => {
  toggleClass()
}, 2000)
