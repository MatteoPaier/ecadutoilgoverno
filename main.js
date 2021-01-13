function randomPastel() {
  return "hsl(" + ~~(360 * Math.random()) + ",65%,75%)"
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

const reasons = [
  'No',
  'Non ancora',
  'Ancora no',
  'Ha stato Renzi',
  'Ha stato Renzie',
  'Io non l\'ho toccato',
  'Sciok',
  'Shock',
  'Era già rotto',
  'Italia morta'
]

window.addEventListener('load', () => {
  document.body.style.backgroundColor = randomPastel()
  document.querySelector('#title').innerHTML = choose(reasons)
})