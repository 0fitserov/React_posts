import React from "react";
import Post from "../Components/Post";
import "../index.css";

const Posts = ({ posts, user, updatePosts }) => {
  const reversedPosts = [...posts].reverse();
  return (
    <div className="listsPosts">
      {reversedPosts.map((post, i) => (
        <Post {...post} user={user} key={post._id} updatePosts={updatePosts}/>
      ))}
    </div>
  );
};

export default Posts;

