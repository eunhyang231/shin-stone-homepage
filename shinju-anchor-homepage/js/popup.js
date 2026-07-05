const openPopup = document.getElementById("openPopup");
const openPopupClose = document.getElementById("openPopupClose");
const openPopupBottomClose = document.getElementById("openPopupBottomClose");
const openPopupToday = document.getElementById("openPopupToday");

const popupStorageKey = "shinjuOpenPopupClosedDate";

function getTodayString(){
  const today = new Date();
  return today.toISOString().slice(0, 10);
}

function closeOpenPopup(){
  if(openPopupToday.checked){
    localStorage.setItem(popupStorageKey, getTodayString());
  }

  openPopup.classList.add("is-hidden");
}

if(openPopup){
  const savedDate = localStorage.getItem(popupStorageKey);
  const today = getTodayString();

  if(savedDate === today){
    openPopup.classList.add("is-hidden");
  }

  openPopupClose.addEventListener("click", closeOpenPopup);
  openPopupBottomClose.addEventListener("click", closeOpenPopup);
}