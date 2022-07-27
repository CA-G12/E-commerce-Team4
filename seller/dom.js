const popUp = document.querySelector(".popUp-add");
const addButton = document.querySelector(".btn-add");
const exit = document.querySelector(".exit");
const elemntDropdown = document.querySelector(".elemntDropdown");
const dropdown = document.querySelectorAll(".dropdown-content a");

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
    e.addEventListener('click' , getCategories)
})

function getCategories (e) {
    console.log(e.target.textContent);
}



// Add Products to Page
function addProductToPage(arrOfProduct) {
  let cardcontainer = document.querySelector(".cards");


}

  function addToLocalStorage(pro){

    window.localStorage.setItem("products",JSON.stringify(pro) )
  }




        function  renderproduct(url,name,price){
          let cardcontainer = document.querySelector(".cards");
          cardcontainer.innerHTML +=
           `<div class="card4">
          <img src=${url} alt="t-shirt" />
          <p><strong>${name}</strong></p>
          <p><strong>${price}</strong></p>
          <i class="fa-solid fa-circle-plus"></i>
        </div> `
        

        }