const UPDATE_SPEED = 6000

const hueMin = 180
const hueMax = 340
const hueRange = hueMax - hueMin
let isActive = true

export default function colorChange() {
  const el = document.querySelector('.colors')
  const button = el.querySelector('button')
  let hue = randomBetween(0, hueRange)
  let timeout = setTimeout(update, UPDATE_SPEED)

  setTimeout(() => el.classList.add('hint'), UPDATE_SPEED + 1000)

  updateText(el)

  button.addEventListener('click', () => {
    isActive = !isActive
    button.classList.toggle('pause', isActive)
    button.classList.toggle('play', !isActive)
    isActive ? update() : clearTimeout(timeout)
    updateText(el)
  })

  function update() {
    const range = { h: [160, 330], s: [20, 40], l: [30, 50] }
    const [primary, secondary] = createColors(hue, range)

    setColor(primary, secondary)
    hue += randomBetween(40, 120)
    timeout = setTimeout(update, UPDATE_SPEED)
  }
}

function createColors(hue, range) {
  const h = 180 + (hue % 160)
  const s = randomBetween(...range.s)
  const l = randomBetween(...range.l)

  return [`hsl(${(h + 120) % 360}deg, ${s + 15}%, ${l + 20}%)`, `hsl(${h}deg, ${s}%, ${l}%)`]
}

function setColor(primary, secondary) {
  document.documentElement.style.setProperty('--primary', primary)
  document.documentElement.style.setProperty('--secondary', secondary)
}

function updateText(el) {
  el.dataset.text = isActive ? el.dataset.pause : el.dataset.play
}

function randomBetween(min, max) {
  return min + Math.round(Math.random() * (max - min))
}
