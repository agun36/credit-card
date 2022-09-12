let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)
let form = id('form')
let btn = id('btn2')
let names = id('name')
let serial = id('serial-num')
let month = id('month')
let year = id('year')
let cvc = id('cvc')
let footer = id('footer')
let cardName = classes('card-name')
let seriaNum = classes('serial')
let monthNum = classes('month')
let yearNum = classes('year')
let cvcNum = classes('cvc-num')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  footer.style.display = 'none'
})

const keyEngine = (id) => {
  if (id.value.trim() === '') {
    id.style.border = '2px solid red'
  } else {
    id.style.border = '2px solid green'
    form.style.display = 'none'
    footer.style.display = 'block'
  }
}

let cardInfos = JSON.parse(localStorage.getItem('cardInfos'))

// let target our form and add the submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault()
  keyEngine(names)
  keyEngine(serial)
  keyEngine(month)
  keyEngine(year)
  keyEngine(cvc)
  let getName = names.value
  let getSerial = serial.value
  let getMonth = month.value
  let getYear = year.value
  let getCvc = cvc.value
  const cardInfos = {
    getName: getName,
    getSerial: getSerial,
    getMonth: getMonth,
    getCvc: getCvc,
    getYear: getYear,
  }
  displayItems()
  localStorage.setItem('cardInfos', JSON.stringify(cardInfos))
})

const displayItems = () => {
  document.querySelector('.card-name').innerHTML = cardInfos.getName
  document.querySelector('.serial').innerHTML = cardInfos.getSerial
  document.querySelector('.month').innerHTML = cardInfos.getMonth
  document.querySelector('.year').innerHTML = cardInfos.getYear
  document.querySelector('.cvc-num').innerHTML = cardInfos.getCvc
}
displayItems()
