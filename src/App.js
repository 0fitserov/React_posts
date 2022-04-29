import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Posts from "./Components/Posts";
import CreatePost from "./Components/CreatePost";
import PostPage from "./Components/PostPage";
import Pagination from "./Components/Pagination";

import api from "./Api";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const POSTS_PER_PAGE = 12;

function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [modalActivity, setModalActivity] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const [pageNmbr, setPageNmbr] = useState(1);

  // console.log("info: ", totalPosts, pageNmbr, Math.ceil(totalPosts/POSTS_PER_PAGE))

  const openModal = () => {
    setModalActivity(true);
  };

  const closeModal = () => {
    setModalActivity(false);
  };

  const addPost = (post) => {
    if (pageNmbr === Math.ceil(totalPosts / POSTS_PER_PAGE)) {
      setPosts(state => {return state.concat(post)});
    }
  };

  const updatePosts = (post) => {
    setPosts((state) => {
      const updatedPostIndex = state.findIndex((el) => el._id === post._id);
      return [
        ...state.slice(0, updatedPostIndex),
        post,
        ...state.slice(updatedPostIndex + 1, state.length),
      ];
    });
  };

  const removePost = (postId) => {
    setPosts((state) => state.filter((el) => el._id !== postId));
  };

  useEffect(() => {
    api.getUser().then((ans) => {
      console.log(ans);
      setUser(ans); //получение юзера по токену /users/me в Api getUser(token)
    });
  }, []);

  useEffect(() => {
    // api.getPosts().then((ans) => {
    //   console.log(ans);
    //   setPosts(ans); //получение списка постов в Api getPosts()
    // });
    api.getPostsPages(pageNmbr, POSTS_PER_PAGE).then((ans) => {
      setTotalPosts(ans.total);
      setPosts(ans.posts);
    });
  }, [pageNmbr]);

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
                  <Posts
                    posts={posts}
                    user={user}
                    updatePosts={updatePosts}
                    removePost={removePost}
                  />
                </>
              }
            />
            <Route exact path="/post/:id" element={<PostPage user={user} />} />
          </Routes>

          {modalActivity && (
            <CreatePost closeModal={closeModal} addPost={addPost} />
          )}

          <div id="modal-root" />
          <Pagination
            totalPages={Math.ceil(totalPosts / POSTS_PER_PAGE)}
            currentPage={pageNmbr}
            setPage={setPageNmbr}
          />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
