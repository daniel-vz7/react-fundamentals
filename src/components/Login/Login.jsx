import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const login = (emailLogin, passwordLogin) => {
    axios({
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email: emailLogin,
        password: passwordLogin,
      }
    })
    .then(response => {
      //TODO save token in localstorage
      history.push('/courses');
    })
    .catch(error => {
      console.log('error');
      console.log(error);
    });
  }

  return (
    <Grid container item xs={12}>
      <Card>
        <CardContent>
          <Grid>
            <Typography variant="h6">
              Login
            </Typography>
          </Grid>

          <Grid item>
            <form onSubmit={async event => {
                event.preventDefault();
                login(email, password);
              }}>
              <Grid>
                <TextField
                  id="Enter email"
                  label="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-helperText"
                  label="Enter password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid>
                <Button variant="contained" type="submit" color="primary">Login</Button>
              </Grid>
            </form>
          </Grid>

          <Grid>
            <Typography>
              If you don't have an account you can <Link to="/register">Register</Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Login;