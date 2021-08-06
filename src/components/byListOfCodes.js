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
  fetchItemsbyCodeList,
} from '../redux/actions/itemsActions';

const ByCodeList = ({ bycodeList, fetchByCodeList }) => {
  const initialValues = {
    code: '',
    code2: '',
    code3: '',
  };

  const appointmentSchema = Yup.object().shape({
    code: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
  });

  const submitForm = (values) => {
    fetchByCodeList(values.code, values.code2, values.code3);
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
                    <label htmlFor="code" className="mb-3">
                      Code of the Country
                      <br />
                      Search by list of ISO 3166-1 2-letter or 3-letter country codes
                    </label>
                    <Field
                      type="string"
                      name="code"
                      id="code"
                      placeholder="col"
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
                    <div className="mt-4 mb-4" />
                    <Field
                      type="string"
                      name="code2"
                      id="code2"
                      placeholder="no"
                      className={`${
                        errors.code2 && touched.code2
                          ? 'is-invalid'
                          : 'is-valid'
                      } form-control`}
                    />

                    <ErrorMessage
                      name="code2"
                      component="span"
                      className="text-danger"
                    />
                    <div className="mt-4 mb-4" />
                    <Field
                      type="string"
                      name="code3"
                      id="code3"
                      placeholder="ee"
                      className={`${
                        errors.code3 && touched.code3
                          ? 'is-invalid'
                          : 'is-valid'
                      } form-control`}
                    />

                    <ErrorMessage
                      name="code3"
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
      <h2 className="mt-1 mb-5">Countries fetched by List of Codes</h2>
      {bycodeList.map((item) => (
        <div key={item.numericCode} className="d-flex justify-content-between w-25">
          <h4 className="mt-3 mb-3">{item.name}</h4>
          <img src={item.flag} alt={item.name} width="80" height="50" />
        </div>
      ))}
    </section>
  );
};

ByCodeList.defaultProps = {
  fetchByCodeList: PropTypes.func,
};

ByCodeList.propTypes = {
  fetchByCodeList: PropTypes.func,
  bycodeList: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  bycodeList: state.allItems.itembyCodeList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByCodeList: (code, code2, code3) => dispatch(fetchItemsbyCodeList(code, code2, code3)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ByCodeList);
