import React from 'react';
import Header from './Header';
import Document from './Document';
import Video from './Video';
import HamburgerNavbar from './HamburgerNavbar';
import People from './User';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Activity from './Activity';
import Channel from './Channel';
import HorizontalScrollDocuments from './HorizontalScrollDocuments';
import HorizontalScrollVideo from './HorizontalScrollVideo';
import HorizontalScrollPeople from './HorizontalScrollPeople';
import NavBar from './NavBar';
import Footer from './Footer';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const userUrl = 'https://dummyapi.io/data/v1/user?limit=10';
  const postUrl = 'https://dummyapi.io/data/v1/post?limit=10';
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const headers = {
      'app-id': '6519b2a5d09e9349436b63fa',
    };

    axios.get(userUrl, { headers })
      .then(response => {
        setUser(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    axios.get(postUrl, { headers })
      .then(response => {
        setPost(response.data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  console.log(user);
  console.log(post);

  return (
    <div>
      {windowWidth <= 1024 ? (
        <HamburgerNavbar />
      ) : (
        <Header />
      )}
      {windowWidth <= 1024 ? (
        null
      ) : (
        <NavBar />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 gap-4">
        <div className="md:col-span-3">
          <div className="md:col-span-1p-4 flex justify-center items-center pt-10">
            {windowWidth <= 1024 ? (
              <HorizontalScrollVideo contents={post} />
            ) : (
              <Video contents={post} />
            )}
          </div>
        </div>
        <div className="md:col-span-1p-4 flex justify-center items-center pt-10">
          <Activity />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 gap-4">
        <div className="md:col-span-3">
          <div className="md:col-span-1p-4 flex justify-center pt-10">
            {windowWidth <= 1024 ? (
              <HorizontalScrollPeople contents={user} />
            ) : (
              <People contents={user} />
            )}
          </div>
        </div>
        <div className="md:col-span-1p-4 flex justify-center items-center pt-10">
          <Channel />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 gap-4">
        <div className="md:col-span-3">
          <div className="md:col-span-1p-4 flex justify-center items-center pt-10">
            {windowWidth <= 1024 ? (
              <HorizontalScrollDocuments contents={post} />
            ) : (
              <Document contents={post} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
