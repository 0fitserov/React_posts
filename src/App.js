import React, { useState, useEffect } from 'react';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import ListPosts from "./Components/ListPosts";
import api from "./Api";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.getUser().then(ans => {     //получение юзера по токену /users/me
            console.log(ans);           //в Api getUser(token)
            setUser(ans);
        });
    }, []);

    useEffect(() => {
        //получение одного поста /posts/:id
        //в Api getPost(token)

    }, []);

    useEffect(() => {
        api.getPosts().then(ans => {    //получение списка постов 
            console.log(ans);           //в Api getPosts()
            setPosts(ans);
        });
    }, []);

    return <>
        <BrowserRouter>
            <Header user={user} />
            <main>
                {/* <ListPosts posts={posts} /> */}
                <Routes>
                    <Route path="/" element={<Posts posts={posts} />} />
                    <Route exact path="/post/:id" element={<Post />} />
                    <Route path="/create-post" element={<Posts />} />
                    <Route path="/edit-post" element={<Posts />} />
                </Routes> 
            </main>
            <Footer />
        </BrowserRouter>
    </>
};

export default App;