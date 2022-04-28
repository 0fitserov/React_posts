import React from "react";
import Api from "../../Api";
import "./index.css";
import LikeSolid from"./heart-solid.svg";
import LikeRegular from"./heart-regular.svg";


const Likes = ({ likes, postId, userId, setPost }) => {
  const isLikedUser = likes.find((el) => {
    return el === userId;
  });
  const likePost = () => {
    console.log(isLikedUser);
    if (!isLikedUser) {
      Api.setLikePost(postId).then(setPost);
    } else {
      Api.removeLikePost(postId).then(setPost);
    }
  };
  return (
    <>
      <div className="like">
        { isLikedUser ? <img src={LikeSolid}
          onClick={likePost}
        /> : <img src={LikeRegular}
          onClick={likePost}
        />}
        <div className="count">{likes.length}</div>
      </div>
    </>
  );
};

export default Likes;
