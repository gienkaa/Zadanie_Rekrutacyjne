document.addEventListener("DOMContentLoaded", function () {
  const expandButton = document.getElementById("expandButton");
  const buttonText = expandButton.querySelector(".button-text");
  const icon = expandButton.querySelector(".icon");
  const pageContainer = document.querySelector(".projects");

  expandButton.addEventListener("click", function () {
    pageContainer.classList.toggle("expanded");

    if (pageContainer.classList.contains("expanded")) {
      buttonText.textContent = "Zwiń";
      icon.classList.remove("fa-arrow-down");
      icon.classList.add("fa-arrow-up");
    } else {
      buttonText.textContent = "Rozwiń";
      icon.classList.remove("fa-arrow-up");
      icon.classList.add("fa-arrow-down");
    }
  });

  // Initialize Masonry
  const masonryGrid = new Masonry(".content", {
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    percentPosition: true,
  });
});
