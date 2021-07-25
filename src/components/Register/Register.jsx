import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (nameRegister, emailRegister, passwordRegister) => {
    axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        name: nameRegister,
        email: emailRegister,
        password: passwordRegister,
      }
    })
    .then(response => {
      console.log('response');
      console.log(response);
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
              Registration
            </Typography>
          </Grid>

          <Grid item>
            <form onSubmit={async event => {
                event.preventDefault();
                register(name, email, password);
              }}>
              <Grid>
                <TextField
                  id="Enter email"
                  label="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
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
                <Button variant="contained" type="submit" color="primary">Register</Button>
              </Grid>
            </form>
          </Grid>

          <Grid>
            <Typography>
              If you have an account you can <Link to="/login">Login</Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Login;