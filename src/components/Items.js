import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchAllItems,
} from '../redux/actions/itemsActions';

const Items = ({ items, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <section className="container-fluid mt-4">
      <h2 className="mt-1 mb-5">All listed countries from API</h2>
      {items.map((item) => (
        <div key={item.numericCode} className="d-flex justify-content-between w-25">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img src={item.flag} alt={item.name} width="80" height="50" />
        </div>
      ))}
    </section>
  );
};

Items.defaultProps = {
  fetchItems: PropTypes.func,
};

Items.propTypes = {
  fetchItems: PropTypes.func,
  items: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.allItems.items,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchAllItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
