import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import { Table, Grid } from 'react-bootstrap';
import './LoginForm.css';

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

class LoginForm extends Component {
  submit = (values) => {
    console.log('values', values);
    this.props.login(values);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="wrapper">
        <form className="form-signin" onSubmit={handleSubmit(this.submit)}>
          <h3 className="form-signin-heading">Please login</h3>
          <Field name="email" className="form-control" type="email" placeholder="Email address" component="input" label="Email" />
          <Field name="password" className="form-control" type="text" placeholder="Password" component="input" label="Password" />
          <div>
            <button type="submit" >Submit</button>
            <button type="button">Clear Values</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'LoginForm'})(LoginForm));

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
// };

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// );

// const SyncValidationForm = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field name="email" type="email" component={renderField} label="Email" />
//       <Field name="password" type="text" component={renderField} label="Password" />
//       <div>
//         <button type="submit" disabled={submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   );
// };
