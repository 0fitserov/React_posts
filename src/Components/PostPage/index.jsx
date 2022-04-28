import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Api from "../../Api";
import EditPost from "../EditPost";
import Likes from "../Likes/index.jsx"

import "./index.css";

const PostPage = ({user, userId}) => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const cancelEdit = () => {
    setIsEditing(false);
  };

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
      <div className="post">
        <button className="btn back">
          <Link to="/">Back</Link>
        </button>
        {isEditing ? (
          <EditPost post={post} cancelEdit={cancelEdit} setPost={setPost} />
        ) : (
          <div className="postCard">
            <img className="picture" src={post.image} alt="img"></img>
            <div className="info">
              <div className="author">
                <img
                  className="imgAvatar"
                  src={post.author.avatar}
                  alt={post.author.name}
                ></img>
                <div className="authorInfo">
                  <div>{post.author.name}</div>
                  <div>{displayDate}</div>
                </div>
              </div>

              <div className="otherInfo">
                {post.author._id===user._id ? <button onClick={handleEdit} className="btn edit">
                  {!isEditing ? "Edit Post" : "View post"} 
                </button> : <div></div>}
                {/* выше выбор кнопки edit в зависимости от id пользователя */}
                <Likes likes={post.likes} postId={post._id} userId={user._id} setPost={setPost}/>
                <div className="tagsList">{post.tags.map((tag, i) => (
              <div className="tags" key={`${tag}${i}`}>{tag}</div>
            ))}</div>
              </div>

              <div className="textInfo">
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
