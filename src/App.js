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

  useEffect(() => {
    api.getUser().then((ans) => {
      console.log(ans);
      setUser(ans); //получение юзера по токену /users/me в Api getUser(token)
    });
  }, []);

  //   useEffect(() => {
  //     api.getSinglePost().then((ans) => {
  //       setPost(ans); //получение одного поста /posts/:id в Api getPost(token)
  //      });
  //    }, []);

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
                  <Posts posts={posts} />
                </>
              }
            />
            <Route exact path="/post/:id" element={<PostPage />} />
          </Routes>
          {/* <div className="welcomeBlock">
            <div>
              <h1>Welcome to the posts page</h1>
              <p>Look and post</p>
            </div>
            <button className="btn btnOk" onClick={openModal}>
              Create Post
            </button>
          </div>
          <Routes>
            <Route path="/" element={<Posts posts={posts} />} />
            <Route exact path="/post/:id" element={<PostPage />} />
            <Route path="/edit-post" element={<Posts />} />
          </Routes> */}

          {modalActivity && <CreatePost closeModal={closeModal} />}

          {/* {modalActivity && (
            <Modal
                handleCloseModal={closeModal}
              // handleCreateClick={savePost}
              title="Create Post"
            >
              <CreatePost />
            </Modal>
          )} */}

          <div id="modal-root" />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
