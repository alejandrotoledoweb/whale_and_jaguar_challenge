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
        <article key={item.numericCode} className="d-flex justify-content-between mt-2 mb-2 pt-3 pr-5 pl-3 pb-3 w-75 border rounded">
          <div className="d-flex flex-column align-items-center justify-content-start w-50">
            <h4 className="mt-3 mb-3">{item.name}</h4>
            <img src={item.flag} alt={item.name} width="160" height="100" />
          </div>
          <div className="d-flex fkex-wrap flex-column w-25">
            <p>
              <strong>Capital:</strong>
              <span>  </span>
              {item.capital}
            </p>
            <p>
              <strong>Region:</strong>
              <span>  </span>
              {item.region}
            </p>
            <p>
              <strong>NumericCode:</strong>
              <span>  </span>
              {item.numericCode}
            </p>
            <p>
              <strong>Currencies:</strong>
              <br />
              <span>  </span>
              {item.currencies.map((data) => (
                <div key={Math.random()}>
                  <p>
                    Code:
                    <span>  </span>
                    {data.code}
                  </p>
                  <p>
                    Symbol:
                    <span>  </span>
                    {data.symbol}
                  </p>
                </div>
              ))}
            </p>
          </div>
          <div className="w-25">
            <p>
              <strong>Languages:</strong>
              <span>  </span>
              <br />
              {item.languages.map((data) => (
                <div key={Math.random()}>
                  <p>
                    Code:
                    <span>  </span>
                    {data.iso639_1}
                  </p>
                  <p>
                    Name:
                    <span>  </span>
                    {data.name}
                  </p>
                </div>
              ))}
            </p>

          </div>
        </article>
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
