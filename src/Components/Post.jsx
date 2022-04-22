import React from 'react';
import "../index.css";

import { Routes, Route, useParams } from "react-router-dom";




const Post = (props) => {
    // console.log(props.author.name);
    return <>
        
        <div className='card'>
        {/* <img src={props.image} alt={props.author.name}></img> */}
            <div>{props.author.name}</div>
            <div>{props.author.about}</div>
        </div>
    </>
    // const { id } = useParams();
    // const [post, setPost] = useState();

    // useEffect(() => {
    //   // получение поста по id
    //   // Api.getPostById(id)
    //   const post = {} {post.author}
};

export default Post;

