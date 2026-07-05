document.addEventListener("DOMContentLoaded", function () {
  const openPopup = document.getElementById("openPopup");
  const openPopupClose = document.getElementById("openPopupClose");
  const openPopupBottomClose = document.getElementById("openPopupBottomClose");
  const openPopupToday = document.getElementById("openPopupToday");

  const popupStorageKey = "shinjuOpenPopupClosedDate";

  if (!openPopup) return;

  function getTodayString() {
    const today = new Date();
    return today.toISOString().slice(0, 10);
  }

  function closeOpenPopup() {
    if (openPopupToday && openPopupToday.checked) {
      localStorage.setItem(popupStorageKey, getTodayString());
    }

    openPopup.classList.add("is-hidden");
  }

  const savedDate = localStorage.getItem(popupStorageKey);
  const today = getTodayString();

  if (savedDate === today) {
    openPopup.classList.add("is-hidden");
  } else {
    openPopup.classList.remove("is-hidden");
  }

  if (openPopupClose) {
    openPopupClose.addEventListener("click", closeOpenPopup);
  }

  if (openPopupBottomClose) {
    openPopupBottomClose.addEventListener("click", closeOpenPopup);
  }
});