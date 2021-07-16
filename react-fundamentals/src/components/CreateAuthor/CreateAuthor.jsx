import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function CreateAuthor({ handleAdd }) {
  const [author, setAuthor] = useState('');

  return (
    <div className="author-create">
      <p>Author name</p>
      <Input value={author} placeholder="Enter author name..." onChange={setAuthor}/>
      <Button
        title="Create Author"
        onClick={() => {
          handleAdd(author);
        }}
        />
    </div>
  );
}

export default CreateAuthor;