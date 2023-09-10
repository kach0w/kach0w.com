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
    <div className={`w-[100vw] text-[#222] dark:text-[white] font-sans bg-[#f3f3f3] dark:bg-slate-900 text-center font-serif ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Blog - kach0w</title>
        <meta name="description" content="kach0w's blog"></meta>
        <link rel="icon" href="/favicon.png"/> 
      </Head>
      <div className='w-[100vw] bg-[#f3f3f3] dark:bg-slate-900'>
        <a className='float-left ml-[30rem] mt-[3rem] text-[#3b82f6] hover:underline' href="/">⮤ Back</a>
        <button id="darkmode" onClick={toggleDarkMode} className='text-[2rem] float-right pr-2 z-10'>🌙</button>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <h2 className='font-extrabold text-3xl mt-[3vh] mb-[1vh] bg-[#f3f3f3] dark:bg-slate-900'>Blog</h2>
      <div className='mb-[2vh]'>
        An infrequent update on a variety of things, from web development to new and old technologies.
        <br></br>
        View it here, or view it on my main <a href="https://bloggger.vercel.app/blog?emailAddress=karsab343@gmail.com">blog</a>
      </div>
      <div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mt-2 mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>July 9th, 2023</p>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
                  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[11rem] mx-auto'>
            <li class="ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] group text-left'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Summer Update</p>
                  <p className='text-slate-600 dark:text-slate-300'>An update, on the summer, and how I've been productive-ish<span>{<br/>}</span><span>{<br/>}</span></p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mb-10 mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>March 27, 2023</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[11rem] mx-auto'>
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] text-left group'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Wikipedia</p>
                  <p className='text-slate-600 dark:text-slate-300'>A speech from the Academic Decathlon competition on Wikipedia, not really web dev but still about technology in general</p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>February 22, 2023</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[11rem] mx-auto'>
            <li class="ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] text-left group'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Express JS</p>
                  <p className='text-slate-600 dark:text-slate-300'>A first step into back-end programming; learning things with express like MySQL and HTTP requests</p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>January 22, 2023</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[11rem] mx-auto'>
            <li class="ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] text-left group'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>OpenAI</p>
                  <p className='text-slate-600 dark:text-slate-300'>Some words on the technology behind OpenAI's Dalle-2 and ChatGPT and some of the controversy behind it</p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>September 4, 2022</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[11rem] mx-auto'>
            <li class="ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] text-left group'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Statistics with ChartJS</p>
                  <p className='text-slate-600 dark:text-slate-300'>Implementing things I learned in my Statistics class with the Javascript graphing tool ChartJS.&nbsp;&nbsp;&nbsp;</p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>June 21, 2022</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[11rem] mx-auto'>
            <li class="ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] text-left group'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Pokédex</p>
                  <p className='text-slate-600 dark:text-slate-300'>Using a Pokemon API to create a pokedex (a wide grid of all pokemon) along with a search function</p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
        <div>
          <div className='inline-block '>
            <ol className='relative w-[50rem] h-[10rem] mx-auto'>
              <li class="mr-4">
                  <div className='w-[49rem] h-[2rem] text-right'>
                    <p className='text-xs group-hover:underline text-slate-900 dark:text-[white] not-italic'>April 16th, 2022</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>  
              </li>
            </ol>
          </div> 
          <div className='inline-block'>
          <ol className='relative border-slate-400 dark:border-white border-l-2 w-[50rem] h-[8rem] mx-auto'>
            <li class="ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-2 -left-1.5 pr-1.5 border bg-gray-700"></div>
              <a href="/blog/summerupdate">
                <div className='w-[20rem] text-left group'>
                  <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Javascript</p>
                  <p className='text-slate-600 dark:text-slate-300'>My first experience with Javascript, starting with making a Discord bot for fun with friends.&nbsp;&nbsp;&nbsp;</p>
                </div>  
              </a>  
            </li>
          </ol>
        </div> 
        </div>
      </div>
      
      <div className='pb-5 dark:bg-slate-900'>
        <div className='w-[25rem] mx-auto text-slate-500 dark:text-slate-200 text-sm font-normal'>
          <div className="float-left">
              <p>Fremont, California</p>
          </div>
          <div className="float-right">
              <a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub</a> · 
              <a className=' text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com"> Email</a>
          </div>
        </div>
      </div>


    </div>
  )
}
