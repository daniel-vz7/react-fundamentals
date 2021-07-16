import { useState } from "react";
//import moment from 'react-moment';
import Input from "../Input/Input";

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
    <div>
      <p>Duration</p>
      <Input placeholder="Enter duration in minutes..." type="number" onChange={(value) => onChange(value)} value={minutes}/>
      <h5>Duration: 0:00 hours</h5>
    </div>
  );
}

export default ConvertDuration;