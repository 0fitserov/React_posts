import React, { useState, useEffect } from 'react';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import UserEdit from './Components/UserEdit';
import Modal from './Components/Modal/Index';
import CreatePost from './Components/CreatePost';

import api from "./Api";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [modalActivity, setModalActivity] = useState(false);

    const openModal = () => {
        setModalActivity(true)
    }

    const closeModal = () => {
        setModalActivity(false)
    }

    const handleModalCreate = () => {
        console.log("create");

    }

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
            <Header user={user} handleEditClick={openModal} />
            <main className='container'>
                <div className='welcomeBlock'>
                    <div>
                        <h1>Welcome to the posts page</h1>
                        <p>Look and post</p>
                    </div>
                    <button className='btn btnOk'><Link to="/create-post" onClick={openModal}>Create Post</Link></button>
                </div>
                <Routes>
                    <Route path="/" element={<Posts posts={posts} />} />
                    <Route exact path="/post/:id" element={<Post />} />
                    <Route path="/edit-post" element={<Posts />} />
                </Routes>
                {modalActivity && <Modal title="Profile" handleCreateClick={handleModalCreate} handleCloseModal={closeModal}>
                    <Routes>
                        <Route path="/" element={<UserEdit user={user} />} />
                        <Route path="/create-post" element={<CreatePost />} />
                        <Route path="/edit-post" element={<Posts />} />
                    </Routes>
                </Modal>}

            </main>
            <Footer />
        </BrowserRouter>
    </>
};

export default App;