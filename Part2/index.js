let idInput = document.getElementById('idInput')
let colorId = document.getElementById('colorInput')
function setCard() {

    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}

function resetCards() {
    var diamonds = document.getElementById('diamonds')
    var hearts = document.getElementById('hearts')
    var clubs = document.getElementById('clubs')
    var spades = document.getElementById('spades')
    diamonds.style.color = 'grey'
    hearts.style.color = 'grey'
    clubs.style.color = 'grey'
    spades.style.color = 'grey'
}