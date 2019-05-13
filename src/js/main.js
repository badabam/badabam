// fix safari label bug with empty function
document.querySelectorAll('label').onClick = function() {
  return false
}

// [primary, dark]
const schemes = [['#FF5600', '#3e6a80'], ['#e94664', '#3f3a4d']]

const randomIndex = Math.floor(Math.random() * schemes.length - 1) + 1
const randomScheme = schemes[randomIndex]
console.log(randomScheme)

const [primary, dark] = randomScheme
const root = document.documentElement
root.style.setProperty('--primary', primary)
root.style.setProperty('--dark', dark)
