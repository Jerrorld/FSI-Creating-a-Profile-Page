
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let descr = document.createElement('h3')
descr.textContent = 'Description:'
dogDetails.append(descr)

let par = document.createElement('p')
par.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(par)

let feeding = document.createElement('h3')
feeding.textContent = 'Feeding Times:'
dogDetails.append(feeding)

let list = document.createElement('ul')
let list1 = document.createElement('li')
let list2 = document.createElement('li')
let list3 = document.createElement('li')
list1.textContent = "9:00 am"
list2.textContent = "12:00 pm"
list3.textContent = "5:00 pm"

list.append(list1)
list.append(list2)
list.append(list3)
dogDetails.append(list)

dogContent.append(dogDetails)