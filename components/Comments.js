import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Comment from './Comment';
import Commentform from './Commentform';
import Navbar from '../components/Navbar';
import Head from 'next/head';
const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsRef = db.collection('comments').orderBy('createdAt', 'desc');
      const snapshot = await commentsRef.get();
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    };

    fetchComments();
  }, []);

  const handleNewComment = (comment) => {
    setComments([comment, ...comments]);
  };
  return (
    <div className='text-center'>
      <Head>
        <title>Projects - kach0w</title>
        <meta name="description" content="kach0w's blog"></meta>
        <link rel="icon" href="/favicon.png"/> 
      </Head>
      <div className='mx-auto mt-[2rem] w-[60rem]'>
        <a className='float-left ml-[] text-[#3b82f6] hover:underline' href="https://kach0w.com">↩ Back</a>
        <br></br>
      </div>
      <Commentform onNewComment={handleNewComment} />
      <br></br>
      <br></br>
      <h2>Comments written by random people:</h2>
      <br></br>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
