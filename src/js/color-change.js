const UPDATE_SPEED = 8000
export default function() {
  let i = Math.round(Math.random() * 360)

  setTimeout(update, UPDATE_SPEED)

  function update() {
    i = (i + random(30, 120)) % 360
    const primary = `hsl(${i}deg, ${random(40, 60)}%, 60%)`
    const secondary = `hsl(${i + 120 + random(0, 40)}deg, 30%, ${random(
      20,
      50
    )}%)`

    document.documentElement.style.setProperty('--primary', primary)
    document.documentElement.style.setProperty('--secondary', secondary)
    setTimeout(update, UPDATE_SPEED)
  }

  function random(min, max) {
    return Math.round(min + Math.random() * (max - min))
  }
}
