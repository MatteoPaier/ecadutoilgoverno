function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

window.addEventListener('load', () => {
  document.querySelector('#title').innerHTML = choose(['No', 'Non ancora', 'Ancora no'])
})