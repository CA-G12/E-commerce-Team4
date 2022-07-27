function item(id, arr) {
  let product = arr.filter((e) => e.id === id);
  return product[0];
}

function addPurchase(obj) {
  let cart = JSON.parse(localStorage.getItem('cart'));

  if (cart) {
    cart.push(obj);
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    let cart = [];
    cart.push(obj);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

module.exports = {
  item,
};
