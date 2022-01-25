import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";
import { TextField, Typography } from "@mui/material";
import { FormContainer, FormStyled, FileInputStyled, SubmitButton } from "./Form.styles";

export default function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearHandler();
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const clearHandler = () => {
    setCurrentId(null);
    setPostData({ creator: "", title: "", tags: "", message: "", selectedFile: "" });
  };

  return (
    <FormContainer>
      <FormStyled autoComplete="off" noValidate onSubmit={submitHandler}>
        <Typography variant="h6">{currentId ? "Edit" : "Create"} a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={inputChangeHandler}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={inputChangeHandler}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={inputChangeHandler}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={inputChangeHandler}
        />
        <FileInputStyled>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </FileInputStyled>
        <SubmitButton variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </SubmitButton>
        <SubmitButton variant="contained" color="secondary" size="small" onClick={clearHandler} fullWidth>
          Clear
        </SubmitButton>
      </FormStyled>
    </FormContainer>
  );
}
