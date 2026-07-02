async function loadLayout() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) {
    const res = await fetch("includes/header.html");
    header.innerHTML = await res.text();
  }

  if (footer) {
    const res = await fetch("includes/footer.html");
    footer.innerHTML = await res.text();
  }
}

loadLayout();