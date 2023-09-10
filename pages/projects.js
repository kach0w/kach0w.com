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
        <title>Projects - kach0w</title>
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

      <h2 className='font-extrabold  text-3xl mt-[3vh] mb-[1vh]'>Projects</h2>
      <div className='mb-[2vh]'>
        Some selected projects, you can find more on my <a className=' text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub</a>.
      </div>
      <div className='mx-auto w-[25rem] bg-[#f3f3f3] dark:bg-slate-900 sm:w-[70rem] grid grid-cols-1 align-left sm:grid-cols-3 mt-[5rem]'>
        <a href="https://dogmash.vercel.app/">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline dark:text-[white] not-italic text-slate-900'>dogmash</p>
            <p className='text-slate-600 dark:text-slate-300'>vote on dogs 🐶, with an ELO system and leaderboard</p>
            <p className=' mt-2 text-sm text-slate-400'>NodeJS · Firebase</p>
          </div>  
        </a>
        <a href="https://bloggger.vercel.app/">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline dark:text-[white] not-italic text-slate-900'>bloggger</p>
            <p className='text-slate-600 dark:text-slate-300'>Old And Inefficient, Just Like You!</p>
            <p className=' mt-2 text-sm text-slate-400'>NodeJS · Firebase</p>
          </div>  
        </a>
        <a href="https://stargazer.vercel.app/">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline dark:text-[white] not-italic text-slate-900'>star-gazer</p>
            <p className='text-slate-600 dark:text-slate-300'>See the stars! - In a weekly email that uses NASA's Astronomy Picture of the Day</p>
            <p className=' mt-2 text-sm text-slate-400'>NodeJS · Firebase</p>
          </div>  
        </a>
        <a href="https://rate-my-aps.vercel.app">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline dark:text-[white] not-italic text-slate-900'>rate-my-aps</p>
            <p className='text-slate-600 dark:text-slate-300'>A platform to democratize information about AP Courses</p>
            <p className=' mt-2 text-sm text-slate-400'>NodeJS · Javascript</p>
          </div>  
        </a>
        <a href="https://devpost.com/software/positivity-discord-bot">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>positivity-discord-bot</p>
            <p className='text-slate-600 dark:text-slate-300'>Created a Discord Bot with sentiment analysis and Discord JS</p>
            <p className=' mt-2 text-sm text-slate-400'>NodeJS · Javascript</p>
          </div>  
        </a>
        <a href="https://github.com/kach0w/dalle-api">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>dalle-api</p>
            <p className='text-slate-600 dark:text-slate-300'>Created a image generator with the Dalle-2 API from OpenAI</p>
            <p className=' mt-2 text-sm text-slate-400'>NextJs · HTML</p>
          </div>  
        </a>
        <a href="https://silly-snickerdoodle-e1a7d5.netlify.app/">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>kach0w-statistics</p>
            <p className='text-slate-600 dark:text-slate-300'>Used ChartJS and stuff from my stats class to make a statistics app</p>
            <p className=' mt-2 text-sm text-slate-400'>JS</p>
          </div>  
        </a>
        <a href="https://github.com/kach0w/Youtube-Playlist-Maker">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>youtube-playlist-maker</p>
            <p className='text-slate-600 dark:text-slate-300'>I created an extension that makes a playlist of a youtuber's videos</p>
            <p className=' mt-2 text-sm text-slate-400'>JS</p>
          </div>  
        </a>
        <a href="https://kach0w.github.io/pokemon/pokedex">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>pokédex</p>
            <p className='text-slate-600 dark:text-slate-300'>Using a Pokemon API to create a pokedex which carries a search function.</p>
            <p className=' mt-2 text-sm text-slate-400'>React · JS · HTML</p>
          </div>  
        </a>
        <a href="https://github.com/kach0w/playerstats">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>player-stats</p>
            <p className='text-slate-600 dark:text-slate-300'>Used the "Ball Don't Lie" API to return the stats of an NBA player</p>
            <p className=' mt-2 text-sm text-slate-400'>React · JS · HTML</p>
          </div> 
        </a>
      </div>
      <div>
        Some miscellaneous projects, small things I did for fun.
      </div>
      <div className='mx-auto w-[25rem] sm:w-[70rem] bg-[#f3f3f3] dark:bg-slate-900 grid grid-cols-1 sm:grid-cols-3 mt-[2rem]'>
        <a href="https://kach0w.github.io/web3d/wikipedia">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>wikipedia</p>
            <p className='text-slate-600 dark:text-slate-300'>The rotating, 3d web; inspiration from bithole.dev</p>
            <p className=' mt-2 text-sm text-slate-400'>JS · HTML</p>
          </div>  
        </a>
        <a href="https://kach0w.github.io/Weather">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>weather</p>
            <p className='text-slate-600 dark:text-slate-300'>One of my first apps with APIs, the weather</p>
            <p className=' mt-2 text-sm text-slate-400'>JS · HTML</p>
          </div>  
        </a>
        <a href="https://kach0w.github.io/Calculator/calc">
          <div className='w-[20rem] dark:bg-slate-800 group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>apple-calculator</p>
            <p className='text-slate-600 dark:text-slate-300'>A recreation of the Apple Calculator with just pure javascript</p>
            <p className=' mt-2 text-sm text-slate-400'>JS · HTML</p>
          </div>  
        </a>
      </div>
      <div className='pb-5 dark:bg-slate-900'>
        <div className='w-[25rem] mx-auto text-slate-500 dark:text-slate-200 text-sm font-normal'>
          <div className="float-left">
              <p>Fremont, California</p>
          </div>
          <div className="float-right">
              <a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub</a> · 
              {/* <a className='hover:text-slate-300' href="https://github.com/kach0w"><i class="fab fa-github"></i> GitHub</a> ·  */}
              <a className=' text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com"> Email</a>
          </div>
        </div>
      </div>
    </div>
  )
}
