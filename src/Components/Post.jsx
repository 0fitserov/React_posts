import React from 'react';
import "../index.css";

import { Routes, Route, useParams } from "react-router-dom";




const Post = (props) => {
    return <>

        <div className='card'>
            <div className='cardHeader'>
                <img className='picCardHeader' src={props.author.avatar} alt={props.author.name}></img>
                <div>
                    <div>{props.author.name}</div>
                    <div>{props.author.about}</div>
                </div>
            </div>
            <div className='cardContent'>
                <img className='cardPic' src={props.image} alt="img"></img>
                <div className='cardInfo'>
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className='cardFooter'>
                <h4>like</h4>
                <div>{props.updated_at}</div>
            </div>


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

