// const h1 = document.querySelector('h1');

// h1.textContent = 'atl text';
// console.dir(h1);


// const ul = document.querySelector('ul');

// const listElements = document.querySelectorAll('li');

// const li = document.querySelector('li');
// console.dir(li);

// console.dir(listElements);

// for(const listItemEl of listElements) {
//     if(listItemEl.textContent === 'text 1') {
//         listItemEl.textContent = 'Textul unu';
//         listItemEl.style.backgroundColor = 'red'
//     } else if(listItemEl.textContent === 'text 2') {
//         listItemEl.textContent = 'Textul doi';
//         listItemEl.style.backgroundColor = 'blue'

//     } else { 
//         listItemEl.textContent = 'Textul trei';
//         listItemEl.style.backgroundColor = 'pink'
//     }
// }

// console.dir(ul);


// const ul = document.querySelector('ul');
// const bttn = document.getElementById('btn-change-color--handler');
// console.log(ul);
// const liElements = ul.children;
// console.log(liElements);
// const liElementsByQuerySelector = ul.querySelectorAll('li');
// console.log(liElementsByQuerySelector);
// const liElementsByChildNodes = ul.childNodes;
// console.log(liElementsByChildNodes);

// // const firstLiElement = liElements[0];
// // console.log(secondLiElement);

// const firsLi = ul.firstChild;
// console.log(firsLi);
// const firsLiElement = ul.firstElementChild;
// console.log(firsLiElement);

// const lasLi = ul.lastChild;
// console.log(lasLi);
// const lastLiElement = ul.lastElementChild;
// console.log(lastLiElement);

// const secondUl = ul.nextSibling;
// console.log(secondUl);
// const secondElementUl = ul.nextElementSibling;
// console.log(secondElementUl);

// // const h1 = ul.previousElementSibling;
// // console.log(h1);
// // console.log(h1.textContent)

// const body = ul.parentElement;
// console.log(body);
// const bodyByParentNode = ul.parentNode;
// console.log(bodyByParentNode);


// const bodyWithClosest = ul.closest('html');
// console.dir(bodyWithClosest);

// // ul.style.backgroundColor = 'red';

// bttn.addEventListener('click', () =>  {
//     // if(ul.className === 'red visible') {
//     //     ul.className = 'red invisible'
//     // } else {
//     //     ul.className = 'red visible'
//     // }

//     ul.classList.toggle('invisible');
// })


const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
console.log(li);
const liAnotherMethod = document.getElementsByTagName('li');
console.log(liAnotherMethod);

const section = document.querySelector('section');


const createdLi = document.createElement('li');

createdLi.textContent = 'text created element';
createdLi.className = 'blue';

const copyCreatedLi = createdLi.cloneNode(true);


ul.append(createdLi,copyCreatedLi);

console.log(liAnotherMethod);
console.log(li);