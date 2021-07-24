import Button from "../Button/Button";

function Courses({ title, description, authors, duration, createdAt }) {
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
          <Button title="Show course"/>
        </div>
      </div>
    </div>
  );
}

export default Courses;