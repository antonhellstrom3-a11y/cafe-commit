// Här ska filtreringen och sorteringen in.
// getVisibleItems() bestämmer VILKA rätter som visas – och i vilken ORDNING.
function getVisibleItems() {
  // En kopia av menyn, så att originalet aldrig ändras
  let items = [...menu];

  const maxPrice = Number(document.querySelector('#max-price').value);

  items = items.filter(item => item.price <= maxPrice);

  return items;
}

const maxPriceInput = document.querySelector('#max-price');
const maxPriceValue = document.querySelector('#max-price-value');

maxPriceInput.addEventListener('input', () => {
  maxPriceValue.textContent = maxPriceInput.value;
  updateMenu();
});

// Anropa updateMenu() varje gång ett filter ändras
function updateMenu() {
  const items = getVisibleItems();
  renderMenu(items);
}