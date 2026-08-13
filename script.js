document.querySelectorAll(".category").forEach((category) => {
  const description = category.dataset.description;
  const target = category.querySelector(".category-description");

  if (target && description) {
    target.textContent = description;
  }
});
