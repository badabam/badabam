const UPDATE_SPEED = 6000

export default function() {
  let timeout = setTimeout(update, UPDATE_SPEED)
  let i = randomNoBrown()

  document.documentElement.addEventListener('click', () => {
    clearTimeout(timeout)
    update()
  })

  function update() {
    i = randomNoBrown()
    const primary = `hsl(${i + 120}deg, ${random(60, 80)}%, ${random(60, 70)}%)`
    const secondary = `hsl(${i}deg, 30%, ${random(30, 45)}%)`

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
