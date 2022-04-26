import React from "react";
import "./index.css"

const PostPage = (props) => {
    const dateUpdate = new Date(props.updated_at);
    const displayDate = `${dateUpdate.getDate()}.${dateUpdate.getMonth()}.${dateUpdate.getFullYear()}`;
    const [post, setPost] = useState([]);

    useEffect(() => {
        api.getSinglePost().then((ans) => {
          setPost(ans); //получение одного поста /posts/:id в Api getPost(token)
         });
       }, []); 

    return <>
        <div className="postPage">
            <img className="postImg" src={props.image} alt="img"></img>
            <div className="postInfo">
                <div className='Author'>
                    <img className='picture' src={props.author.avatar} alt={props.author.name}></img>
                    <div>
                        <div>{props.author.name}</div>
                        <div>{displayDate}</div>
                    </div>
                    <div className="otherInfo">
                        <h4>like</h4>
                        <h4>tags</h4>
                    </div>
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default PostPage;