import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import Button from "../Button/Button";
import Input from "../Input/Input";
import CreateAuthor from "../CreateAuthor/CreateAuthor";
import ConvertDuration from "../ConvertDuration/ConvertDuration";

const CreateCourse = () => {
  let history = useHistory();
  const [authorsList, setAuthorsList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const authorsData = await getAuthors();
      setAuthorsList(authorsData);
    }
    fetchData();
  }, []);

  const addAuthor = async (newAuthor) => {
    if (newAuthor.length >= 2) {
      try {
        return (await axios({
          method: "post",
          url: "http://localhost:3000/authors/add",
          data: {
            name: newAuthor
          },
          headers: {
            Authorization: window.localStorage.getItem('auth'),
          }
        })).data;
      } catch (error) {
        return {
          successful: false,
          message: error.message
        }
      }
    }
  }

  const addCourse = async () => {
    if (title !== '' && description.length >= 2 && authors.length && time > 0) {
      try {
        return (await axios({
          method: "post",
          url: "http://localhost:3000/courses/add",
          data: {
            title: title,
            description: description,
            duration: parseInt(time),
            authors: authors.map(author => {
              return author.id;
            })
          },
          headers: {
            Authorization: window.localStorage.getItem('auth'),
          }
        })).data;
      } catch (error) {
        return {
          successful: false,
          message: error.message
        }
      }
    } else {
      alert('Please, fill all fields');
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
    <Grid container item xs={11}>
      <Grid container item alignItems="flex-end" xs={12} justifyContent="space-between" className="mb-3">
        <Grid item>
          <Typography>
            Title
          </Typography>
          <Input value={title} placeholder="Enter title..." onChange={setTitle}/>
        </Grid>
        <Grid item>
          <Button
            title="Create course"
            onClick={async () => {
              const addData = await addCourse();
              if (addData.successful) history.push('/courses');
            }}
            />
        </Grid>
      </Grid>

      <Grid item xs={12} className="mb-3">
        <Typography>
          Description
        </Typography>
        <TextareaAutosize
          value={description}
          placeholder="Enter description"
          minRows={5}
          className="textarea"
          onChange={event => {
            event.persist();
            setDescription(event.target.value);
          }}></TextareaAutosize>
      </Grid>

      <Grid container item justifyContent="space-between" xs={12}>

        <Grid container direction="column" item xs={5} className="mb-2">
          <Grid container item justifyContent="center" className="mb-3">
            <Typography variant="h6">
              Add author
            </Typography>
          </Grid>
          <CreateAuthor handleAdd={async name => {
            await addAuthor(name);
            const authorsData = await getAuthors();
            setAuthorsList(authorsData);
          }}/>
        </Grid>

        <Grid container item direction="column" justifyContent="center" xs={5} className="mb-2">
          <Grid container item justifyContent="center" className="mb-3">
            <Typography variant="h6">
              Authors
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            {authorsList.map(author => {
              return (
                <Grid container justifyContent="space-between">
                  <Grid item xs={6}>
                    <Typography>
                      {author.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      title="Add author"
                      onClick={() => {
                        setAuthors(prev => {
                          return [...prev, author]
                        });
                      }}
                      />
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>

        <Grid container direction="column" item xs={5} className="mb-2">
          <Grid container item justifyContent="center" className="mb-3">
            <Typography variant="h6">
              Duration
            </Typography>
          </Grid>
          <ConvertDuration
            minutes={time}
            onChange={value => {
              //console.log('sup there');
              //console.log(value);
              setTime(value);
            }}
          />
        </Grid>

        <Grid container item direction="column" justifyContent="center" xs={5} className="mb-2">
          <Grid container item justifyContent="center" className="mb-3">
            <Typography variant="h6">
              Course authors
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            {authors.map(author => {
              return (
                <Grid container justifyContent="space-between">
                  <Grid item xs={6}>
                    <Typography>
                      {author.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      title="Remove author"
                      onClick={() => {
                        setAuthors(prev => {
                          return prev.filter(({ id }) => {
                            return author.id !== id;
                          });
                        });
                      }}
                      />
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CreateCourse;