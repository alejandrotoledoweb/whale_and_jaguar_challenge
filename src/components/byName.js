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
  fetchItemsbyName,
} from '../redux/actions/itemsActions';

const byNameItems = ({
  byName, fetchByName, error, loading,
}) => {
  const initialValues = {
    countryName: '',
  };

  const appointmentSchema = Yup.object().shape({
    countryName: Yup.string().required('Name is required'),
  });

  const submitForm = (values) => {
    fetchByName(values.countryName);
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
                <h5 className="my-4 text-center">Search by name of the country</h5>
                <Form>
                  <div className="form-group w-50 mx-auto">
                    <label htmlFor="countryName" className="mb-3">
                      Name of the Country
                      <br />
                      It can be the native name or partial name
                    </label>
                    <Field
                      type="string"
                      name="countryName"
                      id="countryName"
                      placeholder="united"
                      className={`${
                        errors.countryName && touched.countryName
                          ? 'is-invalid'
                          : 'is-valid'
                      } form-control`}
                    />

                    <ErrorMessage
                      name="country_name"
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
                        Fetch Countries
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
      <h2 className="mt-1 mb-5">Countries fetched by Name</h2>
      {byName.map((item) => (
        <div key={item.numericCode} className="d-flex justify-content-between w-25">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img src={item.flag} alt={item.name} width="80" height="50" />
        </div>
      ))}
    </section>
  );
};

byNameItems.defaultProps = {
  fetchByName: PropTypes.func,
};

byNameItems.propTypes = {
  fetchByName: PropTypes.func,
  byName: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  byName: state.allItems.items,
  error: state.allItems.error,
  loading: state.allItems.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByName: (countryName) => dispatch(fetchItemsbyName(countryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(byNameItems);
