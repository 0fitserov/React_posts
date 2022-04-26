import React from "react";
import "../index.css";

import { Routes, Route, useParams, Link } from "react-router-dom";

const Post = (props) => {
  const dateUpdate = new Date(props.updated_at);
  const displayDate = `${dateUpdate.getDate()}.${dateUpdate.getMonth()}.${dateUpdate.getFullYear()}`;

  return (
    <>
      <div className="card">
        <div className='cardHeader'>
                <img className='picCardHeader' src={props.author.avatar} alt={props.author.name}></img>
                <div>
                    <div>{props.author.name}</div>
                    <div>{props.author.about}</div>
                </div>
            </div>
        <div className="cardContent">
          <Link to={`/post/${props._id}`} key={`${props._id}`}>
            <img className="cardPic" src={props.image} alt="img"></img>
          </Link>
          <div className="cardInfo">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
          </div>
        </div>
        <div className="cardFooter">
          <h4>like</h4>
          <div>{displayDate}</div>
        </div>
      </div>
    </>
  );
  // const { id } = useParams();
  // const [post, setPost] = useState();

  // useEffect(() => {
  //   // получение поста по id
  //   // Api.getPostById(id)
  //   const post = {} {post.author}
};

export default Post;
