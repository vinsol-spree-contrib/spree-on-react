const ProductFinder = {
  find: (productId, products = []) => {
    let product;

    product = products.find((product) => {
      return (product.id === productId);
    });

    return product;
  }
}

export default ProductFinder;
