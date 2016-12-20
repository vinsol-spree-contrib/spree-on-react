import ProductM from '../../services/product-model';

const SpreeAPIProductAdapter = {
  processList: (productsListAMS) => {
    productsListAMS.products.forEach((product) => {
      SpreeAPIProductAdapter._process(product, productsListAMS);
    });

    return productsListAMS;
  },

  processItem: (productAMS) => {
    let product = productAMS.product;
    SpreeAPIProductAdapter._process(product, productAMS);

    return product;
  },

  /*
    PRIVATE METHODS
  */
  _addMasterImages: (product, productsListAMS) => {
    product.master.images = ProductM.images(product.master.image_ids, productsListAMS);
  },

  _addVariantImages: (product, productsListAMS) => {
    product.variants.forEach((variant) => {
      variant.images = ProductM.images(variant.image_ids, productsListAMS);
    });
  },

  _process: (product, AMSResponse) => {
    product.images = ProductM.images(product.image_ids, AMSResponse);
    product.variants = ProductM.variantsExcludingMaster(product.variants_including_master_ids, AMSResponse);
    product.master = ProductM.masterVariant(product.variants_including_master_ids, AMSResponse);
    product.product_properties = ProductM.properties(product.product_property_ids, AMSResponse);

    SpreeAPIProductAdapter._addMasterImages(product, AMSResponse);
    SpreeAPIProductAdapter._addVariantImages(product, AMSResponse);
  }

};

export default SpreeAPIProductAdapter;
