let chars = 'abcdefghijklmnopqrstuvwxyz';
let addCart = document.querySelector('#add-cart');
let addForm = document.querySelector('.add-form');
let imageBg = document.querySelector('.image-bg');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let quantity = document.querySelector('.quantity');
let subTotal = document.querySelector('.total .total-price');
let price = document.querySelector('.content p').textContent.replace('$', '');
let main = document.querySelector('main');
let cardsContainer = document.querySelector('#cards-section');
let purchaseBtn = document.querySelector('.buy-btn');
let searchInput = document.querySelector('.search input');
let filterList = document.querySelector('.list');
let purchase = {};

// local storage data
let storageProducts = JSON.parse(localStorage.getItem('products'));

// adding event listeners
addCart.addEventListener('click', clicking);
purchaseBtn.addEventListener('click', addItemToCart);
searchInput.addEventListener('keyup', searchItem);
filterList.addEventListener('click', filterProducts);

let id =
  '' +
  Math.floor(Math.random() * 9) +
  Math.floor(Math.random() * 9) +
  chars[Math.floor(Math.random() * 26)] +
  chars[Math.floor(Math.random() * 26)];

//   array fo static data for the customer
let products = [
  {
    id: '34nm',
    name: 'colorful socks',
    price: '$20',
    category: 'Socks',
    imageUrl: 'https://i.ibb.co/jHvHXJM/67-K3121-socks-size-8-10-2-pr-f-07.jpg',
  },
  {
    id: '26in',
    name: 'women pink shirt',
    price: '$25',
    category: 'Shirts',
    imageUrl: 'https://i.ibb.co/nRMG51H/ingoods-12-445455.webp',
  },
  {
    id: '82ko',
    name: 'paige men suit',
    price: '$215',
    category: 'Suits',

    imageUrl: 'https://i.ibb.co/k51k24m/images-2.jpg',
  },
  {
    id: '65gf',
    name: 'red men shirt',
    price: '$20',
    category: 'Shirts',
    imageUrl: 'https://i.ibb.co/qJ5Znjj/LM3-CY6-S-048702-1.webp',
  },
  {
    id: '14nh',
    name: 'Women shirt',
    price: '$20',
    category: 'Shirts',
    imageUrl: 'https://i.ibb.co/FwyjZhM/mygoods-69-448812.webp',
  },
  {
    id: '46pa',
    name: 'floral Women dress',
    price: '$270',
    category: 'Dresses',
    imageUrl:
      'https://i.ibb.co/1Yc6HTr/summer-dresses-to-wear-with-boots-264303-1533063983025-main-700x0c.jpg',
  },
  {
    id: '32sa',
    name: 'dark gray men pants',
    price: '$270',
    category: 'Pants',
    imageUrl:
      'https://i.ibb.co/s5By1W5/1649866004-screen-shot-2022-04-13-at-12-06-18-pm-1649865989.png',
  },
  {
    id: '90zi',
    name: 'gray women pants',
    price: '$270',
    category: 'Pants',
    imageUrl: 'https://i.ibb.co/8K6pSZM/images-3.jpg',
  },
  {
    id: '67on',
    name: 'colorful lizard socks',
    price: '$270',
    category: 'Socks',
    imageUrl: 'https://i.ibb.co/VgKV6dF/84-45-0292navy-2-400x400.webp',
  },
];

// localStorage.setItem('products', JSON.stringify(products));

if (storageProducts) {
  let newArr = products.concat(storageProducts);
  newArr.forEach((e) => {
    let card = document.createElement('div');
    card.classList = 'card';
    card.id = e['id'];

    let imgDiv = document.createElement('div');
    let image = document.createElement('img');
    image.src = e['imageUrl'];
    imgDiv.appendChild(image);
    card.appendChild(imgDiv);

    let detDiv = document.createElement('div');

    let title = document.createElement('h3');
    title.textContent = e['name'];

    detDiv.appendChild(title);

    let price = document.createElement('p');
    price.textContent = e['price'];
    detDiv.appendChild(price);

    card.appendChild(detDiv);

    let iconDiv = document.createElement('div');
    iconDiv.id = 'icon';

    let icon = document.createElement('i');
    icon.classList = 'fa-solid fa-cart-shopping';
    icon.addEventListener('click', showForm);
    iconDiv.appendChild(icon);

    card.appendChild(iconDiv);

    cardsContainer.appendChild(card);
  });
} else {
  products.forEach((e) => {
    let card = document.createElement('div');
    card.classList = 'card';
    card.id = e['id'];

    let imgDiv = document.createElement('div');
    let image = document.createElement('img');
    image.src = e['imageUrl'];
    imgDiv.appendChild(image);
    card.appendChild(imgDiv);

    let detDiv = document.createElement('div');

    let title = document.createElement('h3');
    title.textContent = e['name'];

    detDiv.appendChild(title);

    let price = document.createElement('p');
    price.textContent = e['price'];
    detDiv.appendChild(price);

    card.appendChild(detDiv);

    let iconDiv = document.createElement('div');
    iconDiv.id = 'icon';

    let icon = document.createElement('i');
    icon.classList = 'fa-solid fa-cart-shopping';
    icon.addEventListener('click', showForm);
    iconDiv.appendChild(icon);

    card.appendChild(iconDiv);

    cardsContainer.appendChild(card);
  });
}

increment.addEventListener('click', () => {
  let counter = +quantity.textContent;
  quantity.textContent = ++counter;
  subTotal.textContent = `$${counter * price}`;
});

decrement.addEventListener('click', () => {
  let counter = +quantity.textContent;
  if (counter > 0) {
    quantity.textContent = --counter;
    subTotal.textContent = `$${counter * price}`;
  }
});

function showForm(e) {
  let id = e.target.parentElement.parentElement.id;
  if (storageProducts.length === 0 || !storageProducts)
    storageProducts = products;
  let product = item(id, products);
  showItem(product);
  addCart.style.display = 'flex';
}

function showItem(obj) {
  console.log(obj);
  document.querySelector('.content div h3').textContent = obj.name;
  document.querySelector('.content div p').textContent = obj.price;
  imageBg.style.backgroundImage = `url(${obj.imageUrl})`;
  subTotal.textContent = obj.price;

  purchase = {
    id: obj.id,
    name: obj.name,
    price: obj.price,
    imageUrl: obj.imageUrl,
  };
}

function addItemToCart(e) {
  purchase.quantity = quantity.textContent;
  purchase.total = subTotal.textContent;
  addPurchase(purchase);
}

function searchItem(e) {
  let search = e.target.value;
  cardsContainer.textContent = '';
  let newArr = products.concat(storageProducts);

  newArr.forEach((e) => {
    if (e.name.toLowerCase().includes(search)) {
      let card = document.createElement('div');
      card.classList = 'card';
      card.id = e['id'];

      let imgDiv = document.createElement('div');
      let image = document.createElement('img');
      image.src = e['imageUrl'];
      imgDiv.appendChild(image);
      card.appendChild(imgDiv);

      let detDiv = document.createElement('div');

      let title = document.createElement('h3');
      title.textContent = e['name'];

      detDiv.appendChild(title);

      let price = document.createElement('p');
      price.textContent = e['price'];
      detDiv.appendChild(price);

      card.appendChild(detDiv);

      let iconDiv = document.createElement('div');
      iconDiv.id = 'icon';

      let icon = document.createElement('i');
      icon.classList = 'fa-solid fa-cart-shopping';
      icon.addEventListener('click', showForm);
      iconDiv.appendChild(icon);

      card.appendChild(iconDiv);

      cardsContainer.appendChild(card);
    }
  });
}

function filterProducts(e) {
  cardsContainer.textContent = '';
  let category = e.target.textContent;
  let newArr = products.concat(storageProducts);

  newArr.forEach((e) => {
    if (e.category === category) {
      let card = document.createElement('div');
      card.classList = 'card';
      card.id = e['id'];

      let imgDiv = document.createElement('div');
      let image = document.createElement('img');
      image.src = e['imageUrl'];
      imgDiv.appendChild(image);
      card.appendChild(imgDiv);

      let detDiv = document.createElement('div');

      let title = document.createElement('h3');
      title.textContent = e['name'];

      detDiv.appendChild(title);

      let price = document.createElement('p');
      price.textContent = e['price'];
      detDiv.appendChild(price);

      card.appendChild(detDiv);

      let iconDiv = document.createElement('div');
      iconDiv.id = 'icon';

      let icon = document.createElement('i');
      icon.classList = 'fa-solid fa-cart-shopping';
      icon.addEventListener('click', showForm);
      iconDiv.appendChild(icon);

      card.appendChild(iconDiv);

      cardsContainer.appendChild(card);
    }
  });
}

function clicking(e) {
  if (e.target.tagName == 'SECTION') addCart.style.display = 'none';
}
