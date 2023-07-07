import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const Commentform = () => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!author || !content || author==="kach0w") {
            return;
        }
        const commentData = {
            author,
            content,
            createdAt: new Date().toISOString(),
        };
        try {
            await db.collection('comments').add(commentData);
            setAuthor('');
            setContent('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };
    return (
        <div>
            <h1 className='text-[2rem]'>Comments</h1>
            <div className='mb-[2vh]'>
                Type whatever you want, a message to me, a funny joke, it's up to you.
            </div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label htmlFor="author" sm={4}>Username</label>
                <br></br>
                <input
                    className='rounded-md p-2 text-[black]'
                    type="text"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    id="author"
                    placeholder="Username" />
                <br></br>
                <br></br>
                <label htmlFor="content" sm={4}>Message</label>
                <br></br>
                <textarea
                    className='rounded-md p-2 text-[black]'
                    id="content"
                    value={content}
                    placeholder="Start Typing..."
                    onChange={(e) => setContent(e.target.value)} ></textarea>
                <br></br>
                <br></br>
                <button className='bg-[#3b82f6] py-2 px-8 rounded-lg hover:shadow-lg hover:text-slate-200'>Submit</button>
            </form>
            
        </div>
    )
}

export default Commentform