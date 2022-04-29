import React from "react";
import Likes from "./Likes/index.jsx";
import DeleteBtn from "./DeleteBtn/index.js";
import { Link } from "react-router-dom";

import "../index.css";
import api from "../Api.js";

const Post = (props) => {
  const dateUpdate = new Date(props.updated_at);
  const displayDate = `${dateUpdate.getDate()}.${
    dateUpdate.getMonth() + 1
  }.${dateUpdate.getFullYear()}`;

  const deletePost = () => {
    console.log(props._id);
    const confirmed = confirm("Действительно хотите удалить этот пост?");
    if (confirmed) {
      api.deletePost(props._id).then(post => props.removePost(post._id));
      
    }
  };

  return (
    <>
      <div className="card">
        <div className="cardHeader">
          <img
            className="picCardHeader"
            src={props.author.avatar}
            alt={props.author.name}
          ></img>
          <div>
            <div>{props.author.name}</div>
            <div>{props.author.about}</div>
          </div>
        </div>
        <Link
          to={`/post/${props._id}`}
          key={`${props._id}`}
          className="cardContent"
        >
          <img className="cardPic" src={props.image} alt="img"></img>

          <div className="cardInfo">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
          </div>
        </Link>

        <div className="cardFooter">
          <div className="footerOne">
            <Likes
              likes={props.likes}
              postId={props._id}
              userId={props.user._id}
              setPost={props.updatePosts}
            />
            {props.author._id === props.user._id ? (
              <DeleteBtn onDelete={deletePost} />
            ) : null}
            <div>{displayDate}</div>
          </div>
          <div className="footerTwo">
            {props.tags.map((tag, i) => (
              <div className="tags" key={`${tag}${i}`}>
                {tag}
              </div>
            ))}
          </div>
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
