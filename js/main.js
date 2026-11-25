// Startar appen när sidan har laddats
populateCategories();
updateMenu();
renderOrder();

function populateCategories() {
  const categories = [];

  menu.forEach(item => {
    if (categories.includes(item.category)) return;

    categories.push(item.category);

    const option = document.createElement("option");
    option.value = item.category;
    option.textContent = item.category;
    categoryFilter.append(option);
  });
}