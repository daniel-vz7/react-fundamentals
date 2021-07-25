import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CourseInfo = () => {
  const urlParams = useParams();
  const [id, setId] = useState('');
  const [authorsList, setAuthorsList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState([]);
  const [duration, setDuration] = useState(0);
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await getCourseById(urlParams.courseId);
      const authors = await getAuthors();
      setId(courseData.id);
      setTitle(courseData.title);
      setDescription(courseData.description);
      setAuthors(courseData.authors);
      setDuration(courseData.duration);
      setCreatedAt(courseData.creationDate);
      setAuthorsList(authors);
    }
    fetchData();
  }, [])

  const getCourseById = async courseId => {
    try {
      return (await axios({
        method: "get",
        url: `http://localhost:3000/courses/${courseId}`,
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

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid>
            <Link to="/courses">Back to courses</Link>
          </Grid>

          <Grid item xs={12} justifyContent="center" className="mb-3">
            <Typography variant="h4" align="center">
              {title}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>
              {description}
            </Typography>
          </Grid>

          <Grid container item xs={3}>
            <Grid item>
              <Typography><b>ID: </b> {id}</Typography>
            </Grid>
            <Grid item>
              <Typography><b>Duration: </b> {duration} minutes</Typography>
            </Grid>
            <Grid item>
              <Typography><b>Created: </b> {createdAt}</Typography>
            </Grid>
            <Grid item>
              <Typography><b>Authors: </b> {authors.map(author => {
                for (const _author of authorsList) {
                  if (_author.id === author) {
                    return _author.name;
                  }
                }
              }).join(', ')}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CourseInfo;