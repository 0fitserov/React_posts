import React, { useState }  from "react";

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [urlImg, setUrlImg] = useState("")
    const [text, setText] = useState("")
    const [tags, setTags] = useState([])

    const handleChangeUrlImg = (e) => {
        setUrlImg(e.target.value);
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeText = (e) => {
        console.log(e)
        setText(e.target.value);
    }

    const handleChangeTags = (e) => {
        setTags(e.target.value);
    }



    return <>
        <div>Test</div>
        <input type="url" placeholder="URL post's picture" className="input" value={urlImg} onChange={handleChangeUrlImg} />
        {urlImg && <img src={urlImg} alt="img" className="postImg"></img>}
        <input type="text" placeholder="Post's title" className={"input postTitle"} value={title} onChange={handleChangeTitle} />
        <div>
            <textarea type="text" placeholder="Post's text" className="input postTextarea" value={text} onChange={handleChangeText}></textarea>
        </div>
        <input type="text" placeholder="Tags" className="input postTags" value={tags} onChange={handleChangeTags} />
    </>

}

export default CreatePost;