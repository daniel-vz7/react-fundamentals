import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function CreateAuthor({ handleAdd }) {
  const [author, setAuthor] = useState('');

  return (
    <Grid container direction="column" justifyContent="center">
      <Grid container item flex="colum" className="mb-3">
        <Grid item xs={12}>
          <Typography>
            Author name
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth={true} value={author} type="text" placeholder="Enter author name..." onChange={setAuthor}/>
        </Grid>
      </Grid>
      <Grid container item justifyContent="center">
        <Button
          title="Create Author"
          onClick={() => {
            handleAdd(author);
          }}
          />
      </Grid>
    </Grid>
  );
}

export default CreateAuthor;