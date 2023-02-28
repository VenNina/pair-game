// класс это шаблон для создания объектов
// чтобы использовать класс где-то мы его должны экспортировать

export default class Card {
  _open = false
  _success = false
  // конструктор - это та функция, которая будет вызвана при создании экземляра класса
  // чтобы метод класса получил его свойство нужно использовать this - это объект экземпляра класса
  constructor(container, number, action) {
    this.card = document.createElement('li')
    this.card.classList.add('card')
    this.card.textContent = number
    this.number = number
    // у стрелочной функции this является родительский элемент
    this.card.addEventListener('click', () => {
      if (this.open === false && this.success === false) {
        this.open = true
        // устанавливаем значение для open, обращаемся к сеттеру
        action(this)
      }
    })
    container.append(this.card)
  }

  set open(value) {
    this._open = value
    // value ? this.card.classList.add('open') : this.card.classList.remove('open')
    if (value) {
      this.card.classList.add('open')
    }
    else this.card.classList.remove('open')
  }
  get open() {
    return this._open
  }

  set success(value) {
    this._success = value
    value ? this.card.classList.add('success') : this.card.classList.remove('success')
  }
  get success() {
    return this._success
  }
}





