import React from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Logo from "../Logo/Logo";

const Header = () => {
  let history = useHistory();

  const logout = async token => {
    try {
      return (await axios({
        method: "delete",
        url: "http://localhost:3000/logout",
        headers: {
          Authorization: token
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
    <Grid item container justifyContent="space-between" xs={11} direction="row" alignItems="center">
      <Grid item>
        <Logo/>
      </Grid>
      <Grid item container xs justifyContent="flex-end" alignItems="center">
        <Grid item>
          <Typography>Daniel</Typography>
        </Grid>
        <Grid item>
          {window.localStorage.getItem('auth') !== null && (
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                const removeReponse = await logout(window.localStorage.getItem('auth'));
                if (removeReponse.successful) {
                  window.localStorage.removeItem('auth');
                  history.push('/login');
                }
              }}
              >Logout</Button>
          )}
          {window.localStorage.getItem('auth') === null && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push('/login');
              }}
              >Login</Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;