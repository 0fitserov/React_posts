import React, { useState } from "react";
import Api from "../Api";
import Modal from "./Modal/Index";

const CreatePost = ({closeModal, addPost}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

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

  const savePost = () => {
    Api.savePost(title, text, image, tags.split(",")).then((post) => {
      closeModal();
      addPost(post);
    })
  };

    
  
  return (
    <Modal handleCloseModal={closeModal} handleCreateClick={savePost} title="Create Post">
      <div>Test</div>
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
    </Modal>
  );
};

export default CreatePost;
