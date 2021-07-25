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
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (emailLogin, passwordLogin) => {
    try {
      return (await axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: {
          email: emailLogin,
          password: passwordLogin,
        }
      })).data;
    } catch (error) {
      return {
        successful: false,
        message: error.message
      }
    }
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
                const data = await login(email, password);
                if (data.successful) {
                  window.localStorage.setItem('auth', data.result)
                  history.push('/courses');
                }
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