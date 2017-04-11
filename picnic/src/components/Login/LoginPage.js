// import { connect } from 'react-redux';
//
// import syncLoginValidation from './LoginForm';
//
// class LoginPage extends React.Component {
//   const submit = (values) => {
//     // Do something with the form values
//     console.log(values);
//   }
//   render() {
//     return (
//       <syncLoginValidation onSubmit={this.submit} />
//     );
//   }
// }


class LoginForm extends Component {
  submit = (values) => {
    console.log('values', values);
    login(values);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field name="email" type="email" component=input label="Email" errorText="This field is required" />
        <Field name="password" type="text" component=input label="Password" errorText="This field is required" />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
}
