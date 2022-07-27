function removeProduct(productList, productId) {
    const newList = productList.filter(product => product.id !== productId)

    return newList
}