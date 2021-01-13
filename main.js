function randomPastel() {
  return "hsl(" + ~~(360 * Math.random()) + ",65%,75%)"
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

window.addEventListener('load', () => {
  document.body.style.backgroundColor = randomPastel()
  document.querySelector('#title').innerHTML = choose(['No', 'Non ancora', 'Ancora no'])
})