const ProductFinder = {
  find: (productId, products = []) => {
    const radix = 10;
    let product;

    product = products.find((product) => {
      return (parseInt(product.id, radix) === parseInt(productId, radix));
    });

    return product;
  }
}

export default ProductFinder;
