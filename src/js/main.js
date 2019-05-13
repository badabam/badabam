// fix safari label bug with empty function
document.querySelectorAll('label').onClick = function() {
  return false
}

setTimeout(update, 5000)
function update() {
  const i = Math.round(Math.random() * 360)

  const hue1 = Math.random() * 60
  const hue2 = 100 - hue1

  const [firstHue, secondHue] =
    Math.random() < 0.2 ? [hue1, hue2] : [hue2, hue1]

  const colors = [
    `hsl(${i}deg, ${firstHue}%, 60%)`,
    `hsl(${i + 120}deg, ${secondHue}%, 30%)`,
  ]

  document.body.style.setProperty('--primary', colors[0])
  document.body.style.setProperty('--secondary', colors[1])
  setTimeout(update, 5000)
}
