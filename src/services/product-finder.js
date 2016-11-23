const ProductFinder = {
  find: (productId, products = []) => {
    let product;

    product = products.find((product) => {
      return (parseInt(product.id, 10) === parseInt(productId, 10));
    });

    return product;
  }
}

export default ProductFinder;
