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
  fetchItemsbyLanguage,
} from '../redux/actions/itemsActions';

const ByLanguage = ({
  bylanguage, fetchByLanguage, error, loading,
}) => {
  const initialValues = {
    language: '',
  };

  const appointmentSchema = Yup.object().shape({
    language: Yup.string().required('Name is required'),
  });

  const submitForm = (values) => {
    fetchByLanguage(values.language);
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
                <h5 className="my-4 text-center">Search by language of the country</h5>
                <Form>
                  <div className="form-group w-50 mx-auto">
                    <label htmlFor="language" className="mb-3">
                      Language of the country
                      <br />
                      Search by ISO 639-1 language code.
                    </label>
                    <Field
                      type="string"
                      name="language"
                      id="language"
                      placeholder="es"
                      className={`${
                        errors.language && touched.language
                          ? 'is-invalid'
                          : 'is-valid'
                      } form-control`}
                    />

                    <ErrorMessage
                      name="language"
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
      <h2 className="mt-1 mb-5">Countries fetched by Language</h2>
      {bylanguage.map((item) => (
        <div key={item.numericCode} className="d-flex justify-content-between w-25">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img src={item.flag} alt={item.name} width="80" height="50" />
        </div>
      ))}
    </section>
  );
};

ByLanguage.defaultProps = {
  fetchByLanguage: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

ByLanguage.propTypes = {
  fetchByLanguage: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  bylanguage: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  bylanguage: state.allItems.items,
  error: state.allItems.error,
  loading: state.allItems.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByLanguage: (language) => dispatch(fetchItemsbyLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ByLanguage);
