import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Api from "../../Api";
import EditPost from "../EditPost";

import "./index.css";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  

  const cancelEdit = () => {
      setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing((s) => !s);
  };

  console.log(post);

  useEffect(() => {
    Api.getSinglePost(id).then((ans) => {
      setPost(ans); //получение одного поста /posts/:id в Api getPost(token)
    });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const dateUpdate = new Date(post.updated_at);
  const displayDate = `${dateUpdate.getDate()}.${
    dateUpdate.getMonth() + 1
  }.${dateUpdate.getFullYear()}`;

  return (
    <>
      <div className="postPage">
        <button onClick={handleEdit}>
          {!isEditing ? "Edit Post" : "View post"}
        </button>
        <Link to="/">Back</Link>
        {isEditing ? (
          <EditPost post={post} cancelEdit={cancelEdit} setPost={setPost}/>
        ) : (
          <div className="postInfo">
            <img className="postImg" src={post.image} alt="img"></img>
            <div className="Author">
              <img
                className="picture"
                src={post.author.avatar}
                alt={post.author.name}
              ></img>
              <div>
                <div>{post.author.name}</div>
                <div>{displayDate}</div>
              </div>
              <div className="otherInfo">
                <h4>like</h4>
                <h4>tags</h4>
              </div>
              <div>
                <h4>{post.title}</h4>
                <p>{post.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostPage;
