function randomPastel() {
  return "hsl(" + ~~(360 * Math.random()) + ",65%,75%)"
}

function choose(choices) {
  return choices[Math.floor(Math.random() * choices.length)]
}

const reasons = [
  'Sì',
  'Mi sa di sì',
  'Così pare',
  'Ha stato Renzi',
  'Ha stato Renzie',
  'Io non l\'ho toccato',
  'Sciok',
  'Shock',
  'Era già rotto',
  'Italia morta',
  'Succede spesso',
  'Sì, non solo nei giorni dispari'
]

function giveNewReason() {
  document.body.style.backgroundColor = randomPastel()
  document.querySelector('#title').innerHTML = choose(reasons)
}

window.addEventListener('load', () => {
  giveNewReason()
})

window.addEventListener('click', () => {
  giveNewReason()
})

window.addEventListener('keypress', () => {
  giveNewReason()
})
