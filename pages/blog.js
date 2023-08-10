import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark');
    if(!darkMode){
      document.getElementById("darkmode").innerHTML = "☀️"
    } else {
      document.getElementById("darkmode").innerHTML = "🌙"
    }
  };
  return (
    <div className={`w-[100vw] text-[#222] dark:text-[white] h-[100vh] bg-[#f3f3f3] dark:bg-slate-900 text-center font-serif ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Blog - kach0w</title>
        <meta name="description" content="kach0w's blog"></meta>
        <link rel="icon" href="/favicon.png"/> 
      </Head>
      <div className='w-[100vw] bg-[#f3f3f3] dark:bg-slate-900'>
        <a className='float-left ml-[30rem] mt-[3rem] text-[#3b82f6] hover:underline' href="https://kach0w.com">⮤ Back</a>
        <button id="darkmode" onClick={toggleDarkMode} className='text-[2rem] float-right pr-2 z-10'>🌙</button>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <h2 className='font-extrabold text-3xl mt-[3vh] mb-[1vh] bg-[#f3f3f3] dark:bg-slate-900'>Blog</h2>
      <div className='mb-[2vh]'>
        An infrequent update on a variety of things, from web development to new and old technologies.
      </div>
      <div className='mx-auto bg-[#f3f3f3] dark:bg-slate-900 w-[25rem] sm:w-[70rem] grid grid-cols-1 sm:grid-cols-3 mt-[5rem]'>
        <a href="/blog/summerupdate">
          <div className='w-[20rem] h-[10rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Summer Update</p>
            <p className='text-slate-600 dark:text-slate-300'>An update, on the summer, and how I've been productive-ish<span>{<br/>}</span><span>{<br/>}</span></p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>July 9, 2023</p>
          </div>  
        </a>
        <a href="/blog/wikipedia">
          <div className='w-[20rem]  h-[10rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Wikipedia</p>
            <p className='text-slate-600 dark:text-slate-300'>A speech from the Academic Decathlon competition on Wikipedia, not really web dev but still about technology in general</p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>March 27, 2023</p>
          </div>  
        </a>
        <a href="/blog/express">
          <div className='w-[20rem] group dark:bg-slate-800 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Express JS</p>
            <p className='text-slate-600 dark:text-slate-300 '>A first step into back-end programming; learning things with express like MySQL and HTTP requests</p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>February 22, 2023</p>
          </div>  
        </a>
        <a href="/blog/openai">
          <div className='w-[20rem] group dark:bg-slate-800 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>OpenAI</p>
            <p className='text-slate-600 dark:text-slate-300'>Some words on the technology behind OpenAI's Dalle-2 and ChatGPT and some of the controversy behind it.</p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>January 22, 2023</p>
          </div>  
        </a>
        <a href="/blog/statistics">
          <div className='w-[20rem] group dark:bg-slate-800 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Statistics with ChartJS</p>
            <p className='text-slate-600 dark:text-slate-300'>Implementing things I learned in my Statistics class with the Javascript graphing tool ChartJS.</p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>September 4, 2022</p>
          </div>  
        </a>
        <a href="/blog/pokedex">
          <div className='w-[20rem] group  dark:bg-slate-800 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic '>Pokédex</p>
            <p className='text-slate-600 dark:text-slate-300'>Using a Pokemon API to create a pokedex (a wide grid of all pokemon) along with a search function.</p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>June 21, 2022</p>
          </div>  
        </a>
        <a href="/blog/javascript">
          <div className='w-[20rem] group dark:bg-slate-800 rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Javascript</p>
            <p className='text-slate-600 dark:text-slate-300'>My first experience with Javascript, starting with making a Discord bot for fun with friends.</p>
            <p className=' mt-2 text-sm text-slate-400 not-italic'>April 16th, 2022</p>
          </div> 
        </a>
      </div>
      
      <div className='w-[25rem] mx-auto text-slate-500 text-sm font-normal'>
        <div class="float-left">
            <p>Fremont, California</p>
        </div>
        <div class="float-right">
            <a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub </a>·
            {/* <a className='hover:text-slate-300' href="https://github.com/kach0w"><i class="fab fa-github"></i> GitHub</a> ·  */}
            <a className=' text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com"> Email</a>
        </div>
      </div>


    </div>
  )
}
