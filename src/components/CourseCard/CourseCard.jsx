import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

function Courses({ id, title, description, authors, duration, createdAt }) {
  let history = useHistory();
  
  return (
    <div className="course-card">
      <div className="course-card_main">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="course-card_details">
        <div className="detail">
          <b>Authors: </b>
          <span>{authors}</span>
        </div>
        <div className="detail">
          <b>Duration: </b>
          <span>{parseFloat(duration / 60).toFixed(2)} hours</span>
        </div>
        <div className="detail">
          <b>Created: </b>
          <span>{createdAt}</span>
        </div>
        <div className="course-card_show">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push(`/courses/${id}`);
            }}
            >Show course</Button>
        </div>
      </div>
    </div>
  );
}

export default Courses;