import React from "react";
import Posts from "./Posts";


const List = (props) => {
    return (
        <div>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default List;