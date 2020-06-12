import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import AppForm from '../modules/views/AppForm';
import { email, required } from '../modules/form/validation';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import FormFeedback from '../modules/form/FormFeedback';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));
const classes = useStyles();

class SignUp extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = () => {
    alert("Hello")
  }
  // const [sent, setSent] = React.useState(false);

  // const validate = (values) => {
  //   const errors = required(['firstName', 'lastName', 'email', 'password'], values);

  //   if (!errors.email) {
  //     const emailError = email(values.email, values);
  //     if (emailError) {
  //       errors.email = email(values.email, values);
  //     }
  //   }
  //   console.log(values)
  //   return errors;
  // };

  // const handleSubmit = (values,e) => {
  //   alert("Hello")
  //   e.preventDefault()Hello
  render() {
    return (
      <>
        <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/premium-themes/onepirate/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </>
        <>
          <Form onSubmit={this.handleSubmit()} >
            {({ handleSubmit2, submitting }) => (
              <form onSubmit={handleSubmit2} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="fname"
                      fullWidth
                      label="First name"
                      name="firstName"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="lname"
                      fullWidth
                      label="Last name"
                      name="lastName"
                      required
                    />
                  </Grid>
                </Grid>
                <Field
                  autoComplete="email"
                  component={RFTextField}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                />
                <Field
                  fullWidth
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <FormButton
                  className={classes.button}
                  color="secondary"
                  fullWidth
                >
                  {"sign up"}
                </FormButton>
              </form>
            )}
          </Form>
        </>
      </>
    )
  }
}
export default withRoot(SignUp);
