const expandButton = document.getElementById("search-btn");
const searchInput = document.getElementById("searchInput");

expandButton.addEventListener("click", () => {
  searchInput.classList.toggle("search");
  searchInput.classList.toggle("collapsed");
  if (searchInput.classList.contains("search")) {
    searchInput.focus();
  }
});
