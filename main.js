const cardPictures = [
  { name: 'Lebron', image: 'Desktop/Lebron.png' }
  
  
   ]
   cardPictures.sort( () => 0.5 - Math.random() )
  
  const board = document.querySelector('.gameBoard')
  const attemptsHolder = document.querySelector('.attemptsHolder')
  const foundsHolder = document.querySelector('.foundHolder')
  const cardsInGame = 10
  
  let attempts = 0
  let foundCards = 0
  
  foundsHolder.textContent = foundCards
  attemptsHolder.textContent = attempts
  
  let chosenCards = []
  let chosenCardsIds = []
  
  
   function initilizeBoard() {
      for (let i = 0; i < cardPictures.length; i++) {
          let card = document.createElement('img')
          card.setAttribute('src', 'images/faceCard.png')
          card.setAttribute('data-id',i)
          card.addEventListener('click', flipCard)
          board.appendChild(card)
      }
   }
  
  
  function flipCard(){
      if(chosenCards.length < 2) {
      let cardId = this.getAttribute('data-id')
      if(this.getAttribute('src') !== 'images/blank.png'){
          chosenCards.push(cardPictures[cardId].name)
          chosenCardsIds.push(cardId)
          this.setAttribute('src', cardPictures[cardId].image)
          if(chosenCards.length === 2)
              setTimeout(checkForMatch, 300)
      }
  }
  }
  
  
  
  
  
  //initilizeBoard() 
  
  