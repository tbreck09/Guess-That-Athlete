document.addEventListener('DOMContentLoaded', () => {
  

    const cardPictures = [
    { name: 'Lebron', image: 'images/Lebron.jpeg' },
    { name: 'Lebron', image: 'images/Lebron.jpeg' },
    { name: 'joey B', image: 'images/joey B.jpeg'},
    { name: 'joey B', image: 'images/joey B.jpeg'},
    { name: 'Jamarr chase', image: 'images/jamarr chase.jpeg'},
    { name: 'Jamarr chase', image: 'images/jamarr chase.jpeg'},
    { name: 'Tiger Woods', image: 'images/Tiger Woods.jpeg'},
    { name: 'Tiger Woods', image: 'images/Tiger Woods.jpeg'},
    { name: 'joey votto', image: 'images/joey votto.jpeg'},
    { name: 'joey votto', image: 'images/joey votto.jpeg'},
    { name: 'derrick henry', image: 'images/derrick henry.jpeg'},
    { name: 'derrick henry', image: 'images/derrick henry.jpeg'},
    { name: 'steph curry', image: 'images/steph curry.jpeg'},
    { name: 'steph curry', image: 'images/steph curry.jpeg'},
    { name: 'lionel messi', image: 'images/lionel messi.jpeg'},
    { name: 'lionel messi', image: 'images/lionel messi.jpeg'},
    { name: 'pat mahomes', image: 'images/pat mahomes.jpeg'},
    { name: 'pat mahomes', image: 'images/pat mahomes.jpeg'},
    { name: 'facecard', image: 'images/faceCard.jpeg'},
    { name: 'blank', image: 'images/blank.jpeg'}
    
  ];


  cardPictures.sort(() => 0.5 - Math.random())

  const board = document.querySelector('.gameBoard')
  const attemptsHolder = document.querySelector('.attemptsHolder')
  const foundHolder = document.querySelector('.foundHolder')
  const cardsIngame = 10

  let attempts = 0
  let foundCards = 0
  attemptsHolder.textContent = attempts
  foundHolder.textContent = foundCards

  let chosenCards = []
  let chosenCardsIds = []

  

  function initializeBoard() {
    for (let i = 0; i < cardPictures.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/faceCard.jpeg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

  function resetGame() {
    attempts = 0
    foundCards = 0
    attemptsHolder.textContent = attempts
    foundHolder.textContent = foundCards
    chosenCards = []
    chosenCardsIds = []
    messageElement.textContent = ""
  
    const cards = document.querySelectorAll("img")
    for (let card of cards) {
      card.setAttribute("src", "images/faceCard.jpeg")
    }
  
    cardPictures.sort(() => 0.5 - Math.random())
  }
  
  
  const resetButton = document.getElementById("resetButton")
  resetButton.addEventListener("click", resetGame)




    function flipCard() {
    if (chosenCards.length !== 2) {
      let cardId = this.getAttribute('data-id')
      if (this.getAttribute('src') !== 'images/blank.jpeg') {
        chosenCards.push(cardPictures[cardId].name)
        chosenCardsIds.push(cardId)
        this.setAttribute('src', cardPictures[cardId].image)
        if (chosenCards.length === 2) {
          setTimeout(checkForMatch, 1000)
        }
      }
    }
  }

  const maxAttempts = 20
  const messageElement =  document.getElementById('message')

  
  function checkForMatch() {
    attempts++
    let cards = document.querySelectorAll('img')
    let firstCard = chosenCardsIds[0]
    let secondCard = chosenCardsIds[1]
    if (chosenCards[0] === chosenCards[1]) {
      foundCards++
      cards[firstCard].setAttribute('src', 'images/blank.jpeg')
      cards[secondCard].setAttribute('src', 'images/blank.jpeg')
    } else {
      cards[firstCard].setAttribute('src', 'images/faceCard.jpeg')
      cards[secondCard].setAttribute('src', 'images/faceCard.jpeg')
    }
    chosenCards = []
    chosenCardsIds = []
    attemptsHolder.textContent = attempts
    foundHolder.textContent = foundCards
    if (foundCards === cardsIngame) {
      showMessage('Good job!')
    }else if (attempts === maxAttempts) {
      showMessage('Game Over!')
    }
  }

  function showMessage(message) {
    messageElement.textContent = message
  }
  initializeBoard()
  resetGame()
})
