import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import CreateAuthor from "../CreateAuthor/CreateAuthor";
import ConvertDuration from "../ConvertDuration/ConvertDuration";

function CreateCourse({ authorsList, updateAuthors }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState([]);
  const [time, setTime] = useState(null);

  const handleAdd = (newAuthor) => {
    updateAuthors((prevAuthors) => {
      return [...prevAuthors, {
        id: new Date().getTime(),
        name: newAuthor,
      }];
    });
  }

  return (
    <div className="course-create">
      <div className="course-create_header">
        <div>
          <p>Title</p>
          <Input value={title} placeholder="Enter title..." onChange={setTitle}/>
        </div>
        <div>
          <Button title="Create course"/>
        </div>
      </div>
      <div className="course-create_description">
        <div>
          <p>Description</p>
          <textarea
            value={description}
            placeholder="Enter description"
            onChange={event => {
              event.persist();
              setDescription(event.target.value);
            }}></textarea>
        </div>
      </div>


      <div className="course-authors">
        <CreateAuthor handleAdd={handleAdd}/>

        <div className="course-create_add-authors">
          <h4>Authors</h4>
          {authorsList.map(author => {
            return (
              <div className="add-authors_item">
                <p>{author.name}</p>
                <Button
                  title="Add author"
                  onClick={() => {
                    setAuthors(prev => {
                      return [...prev, author]
                    });
                  }}
                  />
              </div>
            )
          })}
        </div>

        <ConvertDuration
          minutes={time}
          onChange={value => {
            console.log('sup there');
            console.log(value);
            setTime(value);
          }}
          />

        <div className="course-authors_list">
          {authors.map(author => {
            return (
              <div className="authors_item">
                <p>{author.name}</p>
                <Button
                  title="Remove author"
                  onClick={() => {
                    /*setAuthors(prev => {
                      return [...prev, author]
                    });*/
                  }}
                  />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default CreateCourse;