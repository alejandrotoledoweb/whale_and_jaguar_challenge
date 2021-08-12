import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Formik,
  Form,
  Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import {
  fetchItemsbyCapital,
} from '../redux/actions/itemsActions';
import Footer from './Footer';

const ByCapital = ({
  bycapital, fetchByCapital, error, loading,
}) => {
  const initialValues = {
    capital: '',
  };

  const appointmentSchema = Yup.object().shape({
    capital: Yup.string().required('Capital is required'),
  });

  const submitForm = (values) => {
    fetchByCapital(values.capital);
  };

  const message = () => {
    if (!loading) {
      <p className="text-success">Fetched successfully.</p>;
    } else {
      <span className="text-danger">{error}</span>;
    }
  };

  return (
    <section className="container-fluid mt-4">

      <section>
        <Formik
          className="w-100"
          initialValues={initialValues}
          validationSchema={appointmentSchema}
          onSubmit={(values) => {
            submitForm(values);
          }}
        >
          {(formik) => {
            const {
              errors, touched, isValid, dirty,
            } = formik;
            return (
              <div className="mt-2 pl-2 pt-2 mb-2 pb-4 pb-4 col-lg-6 col-md-6 col-sm-12 mx-auto">
                <h5 className="my-4 text-center">Search by Capital of the country</h5>
                <Form>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12 mx-auto shadow p-3 rounded">
                    <label htmlFor="language" className="mb-3">
                      Capital of the country
                      <br />
                      Search by capital city.
                    </label>
                    <Field
                      type="string"
                      name="capital"
                      id="capital"
                      placeholder="tokyo"
                      className={`${
                        errors.capital && touched.capital
                          ? 'is-invalid'
                          : 'is-valid'
                      } form-control`}
                    />

                    <ErrorMessage
                      name="capital"
                      component="span"
                      className="text-danger"
                    />
                  </div>

                  <div className="mt-5 mt-3 d-flex justify-content-around">
                    <div className="">
                      <button
                        type="submit"
                        className={`shadow p-2 rounded ${
                          !(dirty && isValid) ? 'disabled-btn' : ''
                        } btn btn-success`}
                        disabled={!(dirty && isValid)}
                      >
                        Fetch Country
                      </button>
                    </div>
                  </div>
                  {error ? message() : '' }
                </Form>
                <div className="mt-3" />
              </div>
            );
          }}
        </Formik>
      </section>
      <h2 className="mt-1 mb-5">Countries fetched by Capital</h2>
      {bycapital.map((item) => (
        <div key={item.numericCode} className="d-flex justify-content-between col-lg-3 col-md-6 col-sm-12">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img className="border" src={item.flag} alt={item.name} width="80" height="50" />
        </div>
      ))}
      <Footer />
    </section>
  );
};

ByCapital.defaultProps = {
  fetchByCapital: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

ByCapital.propTypes = {
  fetchByCapital: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  bycapital: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  bycapital: state.allItems.items,
  error: state.allItems.error,
  loading: state.allItems.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByCapital: (capital) => dispatch(fetchItemsbyCapital(capital)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ByCapital);
