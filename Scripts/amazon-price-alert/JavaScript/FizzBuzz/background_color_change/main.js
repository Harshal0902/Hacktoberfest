//Choose a random color
const button = document.querySelector('.btn')
const body = document.querySelector('.colorArea')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}