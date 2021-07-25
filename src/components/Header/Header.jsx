import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Logo from "../Logo/Logo";

const Header = () => {
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
          <Button variant="contained" color="secondary">Logout</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;