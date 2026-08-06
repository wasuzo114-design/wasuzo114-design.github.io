document.querySelectorAll(".venue-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".venue-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
