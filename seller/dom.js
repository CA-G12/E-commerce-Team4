const popUp = document.querySelector(".popUp-add");
const addButton = document.querySelector(".btn-add");
const exit = document.querySelector(".exit");
const elemntDropdown = document.querySelector(".elemntDropdown");
const dropdown = document.querySelectorAll(".dropdown-content a");
const products = JSON.parse(localStorage.getItem("products") || "[]");

// click button to show pop-up
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  popUp.classList.remove("hide");
});

// click to exit the pop-up
exit.addEventListener("click", (event) => {
  event.preventDefault();
  popUp.classList.add("hide");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// function to check if the elemnt was pressed and take the element
dropdown.forEach((e) => {
  e.addEventListener("click", getCategories);
});

function getCategories(e) {
  console.log(e.target.textContent);
}

const renderPRoducts = () => {
  const productsContainer = document.getElementById("productsContainer");
  products.forEach((product) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const pOfName = document.createElement("p");
    const pOfPrice = document.createElement("p");
    const name = document.createElement("strong");
    const price = document.createElement("strong");
    const divIconCards = document.createElement("div");
    const editIcon = document.createElement("i");
    const deletedIcon = document.createElement("i");

    card.classList.add("card");
    divIconCards.classList = "iconCards";
    deletedIcon.classList = "fa-solid fa-trash trash-btn";
    editIcon.classList = "fa-solid fa-gear";
    deletedIcon.addEventListener("click", deleteProduct);

    card.id = product.id;
    image.src = product.imageUrl;
    name.textContent = product.name;
    price.textContent = product.price;

    card.appendChild(image);
    pOfName.appendChild(name);
    card.appendChild(pOfName);
    pOfPrice.appendChild(price);
    card.appendChild(pOfPrice);
    divIconCards.appendChild(deletedIcon);
    divIconCards.appendChild(editIcon);
    card.appendChild(divIconCards);

    productsContainer.appendChild(card);
  });
};
renderPRoducts();

// Delete function
function deleteProduct(e) {
  let id = e.target.parentElement.parentElement.id;
  e.target.parentElement.parentElement.remove();
  deleteFromlocal(id);
}

function deleteFromlocal(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
      i--;
    }
  }

  localStorage.setItem("products", JSON.stringify(products));
}
