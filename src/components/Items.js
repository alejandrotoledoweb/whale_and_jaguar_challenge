import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchAllItems } from '../redux/actions/itemsActions';
import '../styles/items.css';
import Footer from './Footer';

const Items = ({ items, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const [pageNumber, setpageNumber] = useState(0);
  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;

  const dsplyItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => (
      <article
        key={item.numericCode}
        className="item d-flex flex-wrap mx-auto justify-content-between mt-2 mb-3 pt-3 pr-5 pl-3 pb-3 col-lg-9 col-md-6 col-sm-12 rounded shadow p-3"
      >
        <div className="d-flex flex-wrap flex-column mx-auto align-items-center justify-content-start col-lg-3 col-md-6 col-sm-12">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img src={item.flag} alt={item.name} width="160" height="100" />
        </div>
        <div className="container-fluid justify-content-center align-items-center d-flex flex-wrap flex-column col-lg-3 col-md-6 col-sm-6">
          <p>
            <strong>Capital:</strong>
            <span> </span>
            {item.capital}
          </p>
          <p>
            <strong>Region:</strong>
            <span> </span>
            {item.region}
          </p>
          <p>
            <strong>NumericCode:</strong>
            <span> </span>
            {item.numericCode}
          </p>
          <p>
            <strong>Currencies:</strong>
            <br />
            <span> </span>
            {item.currencies.map((data) => (
              <div key={Math.random()}>
                <p>
                  Code:
                  <span> </span>
                  {data.code}
                </p>
                <p>
                  Symbol:
                  <span> </span>
                  {data.symbol}
                </p>
              </div>
            ))}
          </p>
        </div>
        <div className="mx-auto col-lg-3 col-md-6 col-sm-12">
          <p>
            <strong>Languages:</strong>
            <span> </span>
            <br />
            {item.languages.map((data) => (
              <div key={Math.random()}>
                <p>
                  Code:
                  <span> </span>
                  {data.iso639_1}
                </p>
                <p>
                  Name:
                  <span> </span>
                  {data.name}
                </p>
              </div>
            ))}
          </p>
        </div>
      </article>
    ));

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };

  return (
    <section className="container-fluid mt-4">
      <h2 className="mt-1 mb-5">All listed countries from API</h2>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="main-class container-fluid d-flex flex-wrap align-items-center justify-content-center"
        previousLinkClassName="btn-sm btn-secondary button previousBtn"
        nextLinkClassName="btn-sm btn-secondary button nextBtn"
        disabledClassName="button disabledBtn"
        activeClassName="button activeBtn"
      />
      {dsplyItems}
      <Footer />
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
