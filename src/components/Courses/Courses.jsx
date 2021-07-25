import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import CourseCard from "../CourseCard/CourseCard";
import Button from "../Button/Button";
import Input from "../Input/Input";

function Courses() {
  let history = useHistory();
  let [coursesList, setCoursesList] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  if (searchValue.trim() !== '') {
    coursesList = coursesList.filter(course => {
      let regex = new RegExp(`${searchValue.trim()}`, 'i')
      return course.title.match(regex) || course.id.match(regex);
    })
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const authors = await getAuthors();
      const courses = await getCourses();
      setAuthorsList(authors);
      setCoursesList(courses);
    }
    fetchData();
  }, []);

  const getCourses = async () => {
    try {
      return (await axios({
        method: "get",
        url: "http://localhost:3000/courses/all",
      })).data.result;
    } catch (error) {
      return {
        successful: false,
        message: error.message
      }
    }
  }

  const getAuthors = async () => {
    try {
      return (await axios({
        method: "get",
        url: "http://localhost:3000/authors/all",
      })).data.result;
    } catch (error) {
      return {
        successful: false,
        message: error.message
      }
    }
  }
  //TODO create search component

  return (
    <div className="courses">
      <div className="courses-header">
        <div className="search-field">
          <Input placeholder="Enter course name..." value={searchValue} onChange={setSearchValue}/>
          <Button title="Search"/>
        </div>
        <div className="add-course_button">
          <Button
            onClick={() => {
              history.push('/courses/add')
            }}
            title="Add new course"
            />
        </div>
      </div>
      <div className="courses-list">
        {coursesList.map((course) => (
          <CourseCard
            id={course.id}
            title={course.title}
            description={course.description}
            authors={course.authors.map(author => {
              for (const _author of authorsList) {
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