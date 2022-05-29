const paragraph = document.createElement('p')
paragraph.textContent = 'Hey i\'m red'
paragraph.style.cssText = 'color:red'

document.querySelector('.content').appendChild(paragraph)


//
const heading = document.createElement('h3')
heading.textContent = 'I\'m a blue h3!'
heading.style.cssText = 'color:blue'

document.querySelector('.content').appendChild(heading)


//
const divE1 = document.createElement('div')
divE1.setAttribute ('style', 'border:1px solid black', background:pink)

const headingLarge = document.createElement('h1')
headingLarge.textContent = 'I\'m in a div'

const paragraphSec = document.createElement('p')
paragraphSec.textContent = 'ME TOO!'

divE1.appendChild(headingLarge)
divE1.appendChild(paragraphSec)
document.querySelector('.content').appendChild(divE1)


