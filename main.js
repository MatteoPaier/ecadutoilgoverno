function randomPastel() {
  return "hsl(" + ~~(360 * Math.random()) + ",65%,75%)"
}

function choose(choices) {
  return choices[Math.floor(Math.random() * choices.length)]
}

const reasons = [
    "Rimesso a posto",
    "Nessuno ha visto niente",
    "Pare reggere... forse",
    "Vediamo questo quanto regge"
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
