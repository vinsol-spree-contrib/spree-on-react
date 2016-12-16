const ProductModel = {
  find: (productId, products = []) => {
    const radix = 10;
    let product;

    product = products.find((product) => {
      return (parseInt(product.id, radix) === parseInt(productId, radix));
    });

    return product;
  },

  variants: (variantIds, productsList = {}) => {
    return productsList.variants.filter((variant) => {
      return variantIds.indexOf(variant.id) !== -1;
    });
  },

  variantsExcludingMaster: (variantIds, productsList = {}) => {
    return productsList.variants.filter((variant) => {
      return variantIds.indexOf(variant.id) !== -1 && !variant.is_master;
    });
  },

  masterVariant: (variantIds, productsList = {}) => {
    return productsList.variants.find((variant) => {
      return variantIds.indexOf(variant.id) !== -1 && variant.is_master;
    });
  },

  images: (imageIds, productsList = {}) => {
    return productsList.images.filter((image) => {
      return imageIds.indexOf(image.id) !== -1;
    });
  },

  mainImage: (imageIds, productsList = {}) => {
    return productsList.images.filter((image) => {
      return imageIds.indexOf(image.id) !== -1 && image.position === 1;
    });
  },

  properties: (propertyIds, productsList = {}) => {
    return productsList.product_properties.filter((property) => {
      return propertyIds.indexOf(property.id) !== -1;
    });
  }

};

export default ProductModel;
