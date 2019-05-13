export default function() {
  let i = Math.round(Math.random() * 360)
  setTimeout(update, 5000)

  function update() {
    i = (i + random(30, 120)) % 360
    const primary = `hsl(${i}deg, ${random(40, 60)}%, 60%)`
    const secondary = `hsl(${i + 120 + random(0, 40)}deg, 30%, ${random(
      20,
      50
    )}%)`

    document.body.style.setProperty('--primary', primary)
    document.body.style.setProperty('--secondary', secondary)
    setTimeout(update, 5000)
  }

  function random(min, max) {
    return Math.round(min + Math.random() * (max - min))
  }
}
