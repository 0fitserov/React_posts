import React from "react";
import Post from "../Components/Post";
import "../index.css";

const Posts = ({ posts, user, updatePosts, removePost }) => {
  // const reversedPosts = [...posts].reverse();
  return (
    <div className="listsPosts">
      {posts.map((post, i) => (
        <Post {...post} user={user} key={post._id} updatePosts={updatePosts} removePost={removePost}/>
      ))}
    </div>
  );
};

export default Posts;

