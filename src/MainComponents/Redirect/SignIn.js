import React, { Component } from 'react';
import { Checkbox, FormControlLabel, Container, Typography, Box, Grid, Link, Avatar, Button, CssBaseline, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link as ToSignUp, Redirect } from "react-router-dom"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from "./SignUp.module.css"
import AppAppBar from '../modules/views/AppAppBar';


export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isAuth : false,
      isNotAuth : false

    }
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {email, password} = this.state
    var data = JSON.parse(localStorage.getItem("User"))
    for(let i=0; i < data.length; i++){
        if(data[i].email === email && data[i].password === password){
          this.setState({isAuth:true},()=>{})
        }else{
          this.setState({isNotAuth:true},()=>{})
        }
    }
  }
  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
      isNotAuth : false
    })
  }

  render() {
    const {isAuth} = this.state
    if(isAuth){
      return(
        <Redirect to='/Dashboard'/>
      )
    }
    else{


    return (
      <>
        <AppAppBar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={styles.paper}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={styles.form} noValidate onSubmit={this.handleSubmit}>
              <TextField
                value={this.state.email}
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField

                value={this.state.password}
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
             { this.state.isNotAuth ? <Alert severity="error">Invalid Credentials!</Alert> : ""}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                Sign In
          </Button>
              <Grid container>
                <Grid item xs>

                </Grid>
                <Grid item>
                  <Link variant="body2">
                    <ToSignUp to="/SignUp">
                      {"Don't have an account? Sign Up"}
                    </ToSignUp>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
          </Box>
        </Container>
      </>
    );
  }
}

}