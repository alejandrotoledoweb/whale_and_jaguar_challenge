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

const byCapital = ({
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
              <div className="mt-2 pl-2 pt-2 mb-2 pb-4 w-75 mx-auto">
                <h5 className="my-4 text-center">Search by Capital of the country</h5>
                <Form>
                  <div className="form-group w-50 mx-auto">
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
                        className={`${
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
        <div key={item.numericCode} className="d-flex justify-content-between w-25">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img className="border" src={item.flag} alt={item.name} width="80" height="50" />
        </div>
      ))}
    </section>
  );
};

byCapital.defaultProps = {
  fetchByCapital: PropTypes.func,
};

byCapital.propTypes = {
  fetchByCapital: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(byCapital);
