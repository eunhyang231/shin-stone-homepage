const mainProductList = document.getElementById("mainProductList");

if (mainProductList) {
  products.slice(0, 3).forEach(product => {
    const card = document.createElement("a");
    card.className = "product-card";
    card.href = `products.html?category=${product.category}`;

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;

    mainProductList.appendChild(card);
  });
}

const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(el=>{
    el.classList.add("fade-up");
    observer.observe(el);
});