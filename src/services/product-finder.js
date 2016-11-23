const ProductFinder = {
  find: (productId, products = []) => {
    let product;

    product = products.find((product) => {
      return (parseInt(product.id) === parseInt(productId));
    });

    return product;
  }
}

export default ProductFinder;
