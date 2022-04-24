import React from 'react';
import Post from "../Components/Post";
import "../index.css";

import {Link} from "react-router-dom";

const Posts = ({posts}) => {
    return (
        <div className="listsPosts">
            {posts.map((post, i) => (
                
                <Post {...post} key={post._id} />
            ))}
        </div>
    );
};

export default Posts;

{/* <Link to={`/post/${post._id}`} key={`${post._id}${i}`}>
                    
                </Link> */}