document.addEventListener("DOMContentLoaded", function () {
  const popupInclude = document.getElementById("popupInclude");

  if (popupInclude) {
    fetch("includes/popup.html")
      .then(response => response.text())
      .then(data => {
        popupInclude.innerHTML = data;

        if (typeof initOpenPopup === "function") {
          initOpenPopup();
        }
      });
  }
});