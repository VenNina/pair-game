import Card from './card.js'

const container = document.getElementById('game')
const popup = document.getElementById('popup')
let countCard = 16,
  containerWidth,
  createBtn = false


// карточки
function newGame(container, cardCount) {
  container.style.width = 110 * Math.sqrt(cardCount) + 'px'
  let cardsCount = cardCount,
    cardsNumberArray = [],
    cardsArray = [],
    firstCard = null,
    secondCard = null

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }
  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip))
  }

  // таймер
  const timer = document.body.querySelector('.timer')
  function makeCounter() {
    let currentCount = 60;
    return function () {
      return currentCount--;
    }
  }
  let counter = makeCounter()
  let timerId = setTimeout(function request() {
    let i = counter()
    timer.textContent = i
    if (i > 0) {
      timerId = setTimeout(request, 1000);
    }
    else {
      clearGame()
      newGame(container, countCard)
    }
  }, 5);

  function clearGame() {
    container.innerHTML = ''
    cardsNumberArray = []
    cardsArray = []
    firstCard = null
    secondCard = null
    clearTimeout(timerId, 5)
  }

  // логика игры
  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number !== secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard = null
        secondCard = null
      }
    }

    if (firstCard == null) {
      firstCard = card
    }
    else {
      if (secondCard == null) {
        secondCard = card
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true
        secondCard.success = true
        firstCard = null
        secondCard = null
      }
    }

    if (document.body.querySelectorAll('.card.success').length == cardsNumberArray.length) {
      // если открыты все карточки,
      doubleGame()
    }
  }

  function doubleGame() {
    clearTimeout(timerId, 5)
    if (createBtn == false) {
      let btnWrap = document.createElement('div'),
        btn = document.createElement('button')
      // btnWrap.classList.add('popup__wrap')
      btnWrap.classList.add('popup__wrap', 'popup__wrap-doublegame', 'popup__wrap-doublegame--acive')
      btn.classList.add('btn-doublegame', 'btn-doublegame--active')
      btn.textContent = 'Сыграть еще раз'
      container.parentElement.append(btnWrap)
      btnWrap.append(btn)
      btn.addEventListener('click', () => {
        clearGame()
        newGame(container, countCard)
        btnWrap.classList.toggle('popup__wrap-doublegame--acive')
        createBtn = true
        btn.disabled = true
      })
    }
    else {
      let btnWrap = document.body.querySelector('.popup__wrap-doublegame'),
        btn = document.body.querySelector('.btn-doublegame')
      btnWrap.classList.toggle('popup__wrap-doublegame--acive')
      btn.disabled = false
    }
  }
}


// создание формы для начальных условий игры
function createForm(popup) {
  let popupWrap = document.createElement('div'),
    form = document.createElement('form'),
    label = document.createElement('label'),
    formText = document.createElement('span'),
    input = document.createElement('input'),
    btn = document.createElement('button'),
    inputValue

  popupWrap.classList.add('popup__wrap')

  form.classList.add('form')
  form.action = '#'

  formText.classList.add('form__text')
  formText.textContent = 'Введите количество карточек по горизонтали / вертикали'

  input.classList.add('form__input')
  input.type = 'number'
  input.placeholder = 'от 2 до 10'

  btn.classList.add('form__btn')
  btn.textContent = 'Начать игру'
  btn.type = 'submit'

  popup.append(popupWrap)
  popupWrap.append(form)
  form.append(label)
  form.append(btn)
  label.append(formText)
  label.append(input)


  input.addEventListener('input', () => {
    inputValue = input.value
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputValue >= 2 && inputValue <= 20 && inputValue % 2 == 0) {
      countCard = inputValue
      containerWidth = 110 * countCard
      container.style.width = containerWidth + 'px'
      countCard *= countCard
      newGame(container, countCard)
      popup.textContent = ''
    }
    else {
      popup.textContent = ''
      newGame(container, countCard)
    }
  })
}

createForm(popup)

