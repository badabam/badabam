const UPDATE_SPEED = 6000

export default function() {
  let timeout = setTimeout(update, UPDATE_SPEED)
  let i = randomNoBrown()
  let isActive = true

  const el = document.querySelector('.colors')
  const button = el.querySelector('button')

  updateText()

  button.addEventListener('click', () => {
    isActive = !isActive
    button.classList.toggle('pause', isActive)
    button.classList.toggle('play', !isActive)
    isActive ? update() : clearTimeout(timeout)
    updateText()
  })

  function updateText() {
    el.dataset.text = isActive ? el.dataset.pause : el.dataset.play
  }

  function update() {
    i = randomNoBrown()
    const primary = `hsl(${i + 120}deg, ${random(50, 70)}%, ${random(40, 60)}%)`
    const secondary = `hsl(${i}deg, 30%, ${random(20, 45)}%)`

    document.documentElement.style.setProperty('--primary', primary)
    document.documentElement.style.setProperty('--secondary', secondary)
    timeout = setTimeout(update, UPDATE_SPEED)
  }
}

function randomNoBrown() {
  return random(40, 350)
}

function random(min, max) {
  return Math.round(min + Math.random() * (max - min))
}
