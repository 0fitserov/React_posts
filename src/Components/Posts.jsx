import React from 'react';
import Post from "../Components/Post";
import "../index.css";

import {Link} from "react-router-dom";

const Posts = ({posts}) => {
    return (
        <div className="listsPosts">
            {posts.map((post, i) => (
                <Link to={`/post/${post._id}`} key={`${post._id}${i}`}>
                    <Post {...post} />
                </Link>
            ))}
        </div>
    );
};

export default Posts;