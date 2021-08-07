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
  fetchItemsbyCode,
} from '../redux/actions/itemsActions';

import '../styles/bycode.css';

const ByCode = ({ bycode, fetchByCode }) => {
  const initialValues = {
    code: '',
  };

  const appointmentSchema = Yup.object().shape({
    code: Yup.string().required('Code is required'),
  });

  const submitForm = (values) => {
    fetchByCode(values.code);
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
                <h5 className="my-4 text-center">Search by code of the country</h5>
                <Form>
                  <div className="form-group w-50 mx-auto">
                    <label htmlFor="code" className="mb-3">
                      Code of the Country
                      <br />
                      Search by ISO 3166-1 2-letter or 3-letter country code
                    </label>
                    <Field
                      type="string"
                      name="code"
                      id="code"
                      placeholder="co"
                      className={`${
                        errors.code && touched.code
                          ? 'is-invalid'
                          : 'is-valid'
                      } form-control`}
                    />

                    <ErrorMessage
                      name="code"
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
                </Form>
                <div className="mt-3" />
              </div>
            );
          }}
        </Formik>
      </section>
      <h2 className="mt-1 mb-5">Countries fetched by Code</h2>
      <div key={bycode.numericCode} className="d-flex justify-content-between w-25">
        <h4 className="mt-3 mb-3">{bycode.name}</h4>
        <img src={bycode.flag} alt={bycode.name} width="80" height="50" className="image" />
      </div>
    </section>
  );
};

ByCode.defaultProps = {
  fetchByCode: PropTypes.func,
};

ByCode.propTypes = {
  fetchByCode: PropTypes.func,
  bycode: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  bycode: state.allItems.itembyCode,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByCode: (code) => dispatch(fetchItemsbyCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ByCode);
