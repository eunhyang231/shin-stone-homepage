async function loadLayout() {
  const isProductPage = location.pathname.includes("/products/");
  const basePath = isProductPage ? "../" : "";

  const header = document.getElementById("header");
  const footer = document.getElementById("footer");

  if (header) {
    const headerRes = await fetch(basePath + "includes/header.html");
    let headerHtml = await headerRes.text();

    headerHtml = headerHtml.replaceAll('href="', `href="${basePath}`);
    headerHtml = headerHtml.replaceAll('src="images/', `src="${basePath}images/`);

    header.innerHTML = headerHtml;
  }

  if (footer) {
    const footerRes = await fetch(basePath + "includes/footer.html");
    let footerHtml = await footerRes.text();

    footerHtml = footerHtml.replaceAll('href="', `href="${basePath}`);

    footer.innerHTML = footerHtml;
  }
}

loadLayout();