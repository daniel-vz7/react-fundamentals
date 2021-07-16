//import { useState } from "react";
//import moment from 'react-moment';
import Input from "../Input/Input";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function ConvertDuration(props) {
  const { minutes, onChange } = props;
  /*const handleChange = (event) => {
    event.persist();
    console.log('hi there change duration');
    //onChange(event.target.value);
  }*/
  //const [minutes, setMinutes] = useState();

  //const hours = moment(new Date()).minutes(minutes);
  //console.log(hours);
  return (
    <Grid container direction="column" justifyContent="center">
      <Grid container item flex="colum" className="mb-3">
        <Grid item xs={12}>
          <Typography>
            Duration
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth={true} placeholder="Enter duration in minutes..." type="number" onChange={(value) => onChange(value)} value={minutes}/>
        </Grid>
      </Grid>
      <Grid container item>
        <Typography variant="h5">
          Duration: 0:00 hours
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ConvertDuration;