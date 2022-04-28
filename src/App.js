import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import CreatePost from "./Components/CreatePost";
import PostPage from "./Components/PostPage";

import api from "./Api";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [modalActivity, setModalActivity] = useState(false);

  const openModal = () => {
    setModalActivity(true);
  };

  const closeModal = () => {
    setModalActivity(false);
  };

  const updatePosts = (post) => {
    setPosts(state => {
      const updatedPostIndex = state.findIndex(el => el._id === post._id)
      return [
        ...state.slice(0, updatedPostIndex),
        post,
        ...state.slice(updatedPostIndex+1, state.length)
      ]
    })


  };

  useEffect(() => {
    api.getUser().then((ans) => {
      console.log(ans);
      setUser(ans); //получение юзера по токену /users/me в Api getUser(token)
    });
  }, []);

  useEffect(() => {
    api.getPosts().then((ans) => {
      console.log(ans);
      setPosts(ans); //получение списка постов в Api getPosts()
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header user={user} handleEditClick={openModal} />
        <main className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="welcomeBlock">
                    <div>
                      <h1>Welcome to the posts page</h1>
                      <p>Look and post</p>
                    </div>
                    <button className="btn btnOk" onClick={openModal}>
                      Create Post
                    </button>
                  </div>
                  <Posts posts={posts} user={user} updatePosts={updatePosts}/>
                </>
              }
            />
            <Route exact path="/post/:id" element={<PostPage user={user}/>} />
          </Routes>

          {modalActivity && <CreatePost closeModal={closeModal} />}

          <div id="modal-root" />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
