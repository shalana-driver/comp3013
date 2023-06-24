//add click event listener to ul, since any child that is clicked, will move up until
//it finds a listener. use e.target to figure out if left or right was clicked

//react only uses one event listener on body and relies on all events in the app bubbling 
//up to the body tag

const cards = [];

const generateCard = (idx) => {
  return {
    id: idx,
    imgUrl: `https://picsum.photos/300/300?sig=${idx}`
  }
}

const createElement = (obj) => {
  // get the type and create an element with it
  let type = obj.type;
  let el = document.createElement(type);
  if (obj.className) {
   el.className = obj.className;
  }
  if (obj.childText) {
   let text = document.createTextNode(obj.childText);
   el.appendChild(text);
  }
  if (obj.src) {
    el.setAttribute("src", obj.src);
   }
   return el;
 }

const createCard = (card) => {
  const li = createElement({type: "li", className: "cards_item"});
  li.cardId = card.id;
  const cardContainerDiv = createElement({type: "div", className: "card"});
  const cardImageDiv = createElement({type: "div", className: "card_image"});
  const cardImage = createElement({type: "img", src: card.imgUrl});
  const editContainer = createElement({type: "div", className: "card_content"});

  // Create Edit Mode Buttons
  const btns = ["left", "right", "increase", "decrease"];
  const btnElements = btns.map(btn => createElement({type: "button", className: btn, childText: btn}))

  // Attach Edit Mode Buttons to Edit Container
  editContainer.append(...btnElements);

  // Attach card image to cardImageDiv
  cardImageDiv.appendChild(cardImage);

  // Attach card image and Edit container to Card
  cardContainerDiv.append(cardImageDiv, editContainer);

  // Attach Card to <li>
  li.appendChild(cardContainerDiv);
  return li;
}

const drawCards = () => {
  const ul = document.querySelector(".cards");
  const htmlCards = cards.map(card => createCard(card))
  ul.append(...htmlCards);
}

const redrawCards = () => {
  const ul = document.querySelector(".cards");
  ul.innerHTML = "";
  drawCards();
}

const shiftCardItem = (arr, fromIndex, toIndex) => {
  if (toIndex == "-1" || toIndex == cards.length) {
    return;
  }
  let element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

const moveCard = (direction, cardToEdit) => {
  const cardIndex = cards.findIndex(card => card.id == cardToEdit.cardId);
  if (direction === "left") {
    shiftCardItem(cards, cardIndex, cardIndex - 1);
  } else {
    shiftCardItem(cards, cardIndex, cardIndex + 1);
  }
}

const resizeCard = (scale, cardToEdit) => {
  // TODO: Implement
}

const handleEdit = (e) => {
  const cardToEdit = e.target.parentNode.parentNode.parentNode;
  if (e.target.className === "left") {
    moveCard("left", cardToEdit);
  } else if (e.target.className === "right") {
    moveCard("right", cardToEdit);
  } else if (e.target.className === "increase") {
    resizeCard("increase", cardToEdit);
  } else {
    resizeCard("decrease", cardToEdit);
  }
  redrawCards();
}

const createCardContainer = () => {
  const main = document.querySelector(".main");
  const ul = createElement({type: "ul", className: "cards"});
  ul.addEventListener("click", handleEdit);
  main.appendChild(ul);
}

const seedCards = (numOfCards=10) => {
  let i = 0;
  while (i < numOfCards) {
    cards.push(generateCard(i));
    i++;
  }
}

const startApp = () => {
  seedCards(10);
  createCardContainer();
  drawCards();
}

startApp();
