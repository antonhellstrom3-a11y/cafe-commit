const orderList = document.querySelector("#order-list");
const orderTotal = document.querySelector("#order-total");
const orderCount = document.querySelector("#order-count");
const placeOrderButton = document.querySelector("#place-order");
const orderMessage = document.querySelector("#order-message");

// Allt som ligger i beställningen just nu
let order = [];

function addToOrder(item) {
  order.push(item);
  orderCount.textContent = order.length;
  renderOrder();
}

function removeFromOrder(index) {
  order.splice(index);
  orderCount.textContent = order.length;
  renderOrder();
}
function getOrderTotal(order) {
  let total = 0;

  order.forEach((item) => {
    total += item.price;
  });

  return total;
}

// Ritar upp beställningen och räknar ut totalen
function renderOrder() {
   if (order.length === 0) {
    orderMessage.textContent = "Din beställning är tom – lägg till något gott från menyn!";
  } else {
    orderMessage.textContent = "";
  }
  
  orderList.innerHTML = "";
  // let total = 0;

  order.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("order-row");

    const text = document.createElement("span");
    text.textContent = item.name + " – " + item.price + " kr";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Ta bort";
    removeButton.addEventListener("click", () => {
      removeFromOrder(index);
    });

    li.append(text, removeButton);
    orderList.append(li);

    
  });
  const total = getOrderTotal(order);
  orderTotal.textContent = "Totalt: " + total + " kr";
}

const deleteBtn = document.querySelector("#deleteBtn");

deleteBtn.addEventListener("click", () => {
  order = [];
  renderOrder();
});

placeOrderButton.addEventListener("click", () => {
  const total = getOrderTotal(order);
  let radio = document.querySelector('input[name="serving"][value="Äta här"]');
  if (radio.checked){
      orderMessage.textContent = `"Tack! Din beställning (Äta här) på ${total} kr är mottagen."`;
  } else{
    orderMessage.textContent = `"Tack! Din beställning (Ta med) på ${total} kr är mottagen."`;
  }
  orderList.remove();
  orderTotal.remove();
  
  if (order.length === 0) {
    orderMessage.textContent = "Din beställning är tom – lägg till något gott från menyn!";
    return;
  }

  orderMessage.textContent = "Tack för din beställning!";
});
