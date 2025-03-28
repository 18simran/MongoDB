document.addEventListener("DOMContentLoaded", () => {
  const deleteForms = document.querySelectorAll(".delete-form");

  deleteForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      const confirmed = confirm("Are you sure you want to delete this chat?");
      if (!confirmed) {
        event.preventDefault();
      }
    });
  });
});
