import APP_ACTIONS from '../constants/app-actions';

import TaxonFinder from '../services/taxon-finder';
import ProductsAPI from '../apis/products';

const products = {
  addProducts: (productsResponse) => {
    return (dispatch, getState) => {
      // Create Products
      // debugger
      productsResponse.products.forEach((product) => {
        let productImages = productsResponse.images;
        let productProperties = productsResponse.product_properties.filter((productProperty) => {
          return productProperty.product_id === product.id;
        });
        let productVariants = productsResponse.variants.filter((variant) => {
          return product.variants_including_master_ids.includes(variant.id);
        });

        // Sending all images as we anyways need to filter the images based on
        // variants
        dispatch(products.addProduct({images: productImages, variants: productVariants, product_properties: productProperties, product: product }));

      });

      // dispatch({
      //   type: APP_ACTIONS.ADD_PRODUCTS,
      //   payload: productsResponse
      // })

      // Add ProductProperties
    }
  },

  appendProducts: (productsResponse) => {
    return {
      type: APP_ACTIONS.APPEND_PRODUCTS,
      payload: productsResponse
    };
  },

  addProduct: (productPayload) => {
    return (dispatch, getState) => {

      dispatch({
        type: APP_ACTIONS.ADD_PRODUCT,
        payload: {
          product: productPayload.product
        }
      });

      dispatch(products.addPropertiesToProduct(productPayload.product.id, productPayload.product_properties));
      // products.addImagesToProduct(productPayload.product.id, productPayload.images)
      dispatch(products.addVariantsToProduct(productPayload.product.id, productPayload.variants));

      productPayload.variants.forEach((variant) => {
        let filteredImages = productPayload.images.filter((image) => {
          return image.viewable_id === variant.id
        });

        dispatch(products.addImagesToVariant(variant.id, filteredImages));
      });

      // AddImagesToProduct

    }
  },

  fetchProducts: (paramsToMerge = {}) => {
    return (dispatch, getState) => {
      let currentPathName = getState().routing.locationBeforeTransitions.pathname;
      let taxon = TaxonFinder.findByPermalink(currentPathName, getState().taxons);

      if (taxon) {
        paramsToMerge.taxonId = taxon.id;
        paramsToMerge.searchTerm = '';
      }

      return ProductsAPI.getList(paramsToMerge);
    }
  },

  addImagesToVariant: (variantId, images) => {
    return({
      type: APP_ACTIONS.ADD_IMAGES_TO_VARIANT,
      payload: {
        images: images,
        variant_id: variantId
      }
    });
  },

  addVariantsToProduct: (productId, variants) => {
    return({
      type: APP_ACTIONS.ADD_VARIANTS_TO_PRODUCT,
      payload: {
        variants: variants,
        product_id: productId
      }
    });
  },

  addPropertiesToProduct: (productId, properties) => {
    return({
      type: APP_ACTIONS.ADD_PROPERTIES_TO_PRODUCT,
      payload: {
        product_properties: properties,
        product_id: productId
      }
    });
  },

  addMasterToProduct: () => {

  }
};

export default products;
