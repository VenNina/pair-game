export default function createForm(popup) {
  console.log('1234');
  let form = document.body.createElement('form'),
    label = document.body.createElement('label'),
    formText = document.body.createElement('span'),
    input = document.body.createElement('input'),
    btn = document.body.createElement('button')

  popup.classList.add('popup')

  form.classList.add('form')
  form.action = '#'

  formText.classList.add('form__text')
  formText.textContent = 'Введите количество карточек по горизонтали / вертикали'

  input.classList.add('form__input')
  input.type = 'number'
  input.placeholder = 'от 2 до 10'

  btn.classList.add('form__btn')
  btn.type = 'submit'

  popup.append.form
  form.append.label
  form.append.btn
  label.append.formText
  label.append.input
}
