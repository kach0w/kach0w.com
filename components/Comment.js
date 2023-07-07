import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="rounded-md bg-slate-200 w-[20rem] h-[13rem] mx-auto mb-4">
      <header className="bg-[#3b82f6] h-[4rem] rounded-t-md text-[0.8rem]">
        <h4 className='font-bold text-[1.5rem]'>{comment.author}</h4>
        <p>{comment.createdAt.substring(0, 10)}</p>
      </header>
      <p className='text-[1rem] p-3'>{comment.content}</p>
      <hr />
    </div>
  );
};

export default Comment;
