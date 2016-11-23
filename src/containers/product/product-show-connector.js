import { connect } from 'react-redux';

import ProductShow from '../../components/product/show';
import Actions from '../../actions';
import ProductsAPI from '../../apis/products';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductFromAPI: (productId) => {
      // Show loader
      ProductsAPI.getItem(productId).then((response) => {
        let fetchedProduct = JSON.parse(response.text);
        dispatch (Actions.addProduct(fetchedProduct));
      });
      // Hide loader
    }
  };
};

const ProductShowConnector = connect(mapStateToProps, mapDispatchToProps)(ProductShow);

export default ProductShowConnector;
