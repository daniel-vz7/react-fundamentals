import { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Courses({ coursesList, authors }) {
  const [searchValue, setSearchValue] = useState('');
  if (searchValue.trim() !== '') {
    console.log('should query now');
    console.log(coursesList);
  }

  return (
    <div className="courses">
      <div className="courses-header">
        <div className="search-field">
          <Input placeholder="Enter course name..." value={searchValue} onChange={setSearchValue}/>
          <Button title="Search"/>
        </div>
        <div className="add-course_button">
          <Button title="Add new course"/>
        </div>
      </div>
      <div className="courses-list">
        {coursesList.map((course) => (
          <CourseCard
            title={course.title}
            description={course.description}
            authors={course.authors.map(author => {
              for (const _author of authors) {
                if (_author.id === author) {
                  return _author.name;
                }
              }
            })}
            duration={course.duration}
            createdAt={course.creationDate}
            />
        ))}
      </div>
    </div>
  );
}

export default Courses;