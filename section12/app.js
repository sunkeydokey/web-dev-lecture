// document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("exernal-link");

// anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("p a"); 첫 번째 요소만 반환
// anchorElement.href = "https://github.com/sunkeydokey";

let anchorElement = document.querySelectorAll("p a"); // 모든 요소를 배열로 반환
console.log(anchorElement);
anchorElement[0].href = "https://github.com/sunkeydokey";

// ADD AN ELEMENT
// 1. Create the new element

document.createElement("a");

// 2. Get access to the parent element that should hold the new element
// 3. Insert the new element into the parent element content
