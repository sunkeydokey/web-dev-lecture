// document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("exernal-link");

// anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("p a"); 첫 번째 요소만 반환
// anchorElement.href = "https://github.com/sunkeydokey";

// let anchorElement = document.querySelectorAll('p a'); // 모든 요소를 배열로 반환
// console.log(anchorElement);
// anchorElement[0].href = 'https://github.com/sunkeydokey';

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://github.com/sunkeydokey';
newAnchorElement.textContent = 'My Github';

// 2. Get access to the parent element that should hold the new element
let firstPargraph = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstPargraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1Element = document.querySelector('h1');

// 2. Remove it

firstH1Element.remove();

// MOVE ELEMENTS

firstPargraph.parentElement.append(firstPargraph);

// innerHTML

console.log(firstPargraph.innerHTML);

firstPargraph.innerHTML = 'Hi! This is <strong>important</strong>.';
