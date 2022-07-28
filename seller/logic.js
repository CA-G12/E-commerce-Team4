function removeProduct(productList, productId) {
  const newList = productList.filter((product) => product.id !== productId);

  return newList;
}
let arrOfProduct = [];

if (window.localStorage.getItem('products')) {
  arrOfProduct = JSON.parse(window.localStorage.getItem('products'));
}

let name = document.querySelector('.inputForm');
let imgurl = document.querySelector('.imgurl');
let price = document.querySelector('.price');
let category = document.querySelector('#catogries');

let addBtn = document.querySelector('.linkAdd');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const productname = name.value;
  const url = imgurl.value;
  const productprice = price.value;
  const productcatogries = category.value;

  addProductToArray(url, productname, productprice, productcatogries);
});

function addProductToArray(imgurl, name, price, category) {
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  let id =
    '' +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    chars[Math.floor(Math.random() * 26)] +
    chars[Math.floor(Math.random() * 26)];

  let product = {
    id: id,
    name: name,
    imageUrl: imgurl,
    price: `$${price}`,
    category: category,
  };

  renderproduct(product);

  arrOfProduct.push(product);

  addToLocalStorage(arrOfProduct);

  addProductToPage(product);
  // addProductToCustomerPage(arrOfProduct)

  return arrOfProduct;
}
