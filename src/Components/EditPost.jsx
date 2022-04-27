import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Api from "../Api";

const EditPost = ({ post, cancelEdit, setPost }) => {
  const [title, setTitle] = useState(post.title);
  const [image, setImage] = useState(post.image);
  const [text, setText] = useState(post.text);
  const [tags, setTags] = useState(post.tags);
  const [error, setError] = useState("");

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e) => {
    console.log(e);
    setText(e.target.value);
  };

  const handleChangeTags = (e) => {
    setTags(e.target.value);
  };

  const updatePost = () => {
      const tagsArr = Array.isArray(tags) ? tags : tags.split(",");
      console.log(tags);
    Api.updatePost(title, text, image, tagsArr, post._id).then(
      (result) => {
        setPost(result);
        setError("");
      }
    ).catch((error) => {
        setError(error)
    });
  };

  return (
    <div>
      <button onClick={updatePost}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
      {error && <div>{error}</div>}
      <input
        type="url"
        placeholder="URL post's picture"
        className="input"
        value={image}
        onChange={handleChangeImage}
      />
      {image && <img src={image} alt="img" className="postImg"></img>}
      <input
        type="text"
        placeholder="Post's title"
        className={"input postTitle"}
        value={title}
        onChange={handleChangeTitle}
      />
      <div>
        <textarea
          type="text"
          placeholder="Post's text"
          className="input postTextarea"
          value={text}
          onChange={handleChangeText}
        ></textarea>
      </div>
      <input
        type="text"
        placeholder="Tags"
        className="input postTags"
        value={tags}
        onChange={handleChangeTags}
      />
    </div>
  );
};

export default EditPost;
