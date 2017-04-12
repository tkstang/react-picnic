import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Table, Grid } from 'react-bootstrap';

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

const mapDispatchToProps = dispatch => {
  console.log("this is dispatch", dispatch);
  return bindActionCreators({ login }, dispatch);
}

class LoginForm extends Component {
  submit = (values) => {
    console.log('values', values);
    this.props.login(values);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Grid>
        <form onSubmit={handleSubmit(this.submit)}>
          <Field name="email" type="email" component="input" label="Email" />
          <Field name="password" type="text" component="input" label="Password" />
          <div>
            <button type="submit" >Submit</button>
            <button type="button">Clear Values</button>
          </div>
        </form>
      </Grid>
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
