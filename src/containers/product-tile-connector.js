import { connect } from 'react-redux';

import Actions from '../actions';
import ProductTile from '../components/product-tile';

const mapStateToProps = (state, ownProps) => {
  let lineItem = state.order.line_items.find((lineItem) => {
    return (ownProps.product.variants_including_master_ids.indexOf(lineItem.variant_id) !== -1);
  });

  return {
    productInCart: !!lineItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (variantId, quantity = 1) => {
      dispatch (Actions.addProductToCart(variantId, quantity)).then((response) => {
        dispatch (Actions.refreshOrder());
        dispatch (Actions.showFlash('Product Successfully added to the cart!!'));
      },
      (error) => {
        dispatch (Actions.showFlash('Failed to add product to cart. Please try again later!', 'danger'));
      });
    }
  };
};

const ProductTileConnector = connect(mapStateToProps, mapDispatchToProps)(ProductTile);

export default ProductTileConnector;
