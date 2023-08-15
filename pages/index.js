import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import rusteze from '../assets/rusteze-2.png';
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
    <div className={`w-[100vw] text-[#222] dark:text-[white] bg-[#f3f3f3] dark:bg-slate-900 text-center font-sans ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <Script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous" />
      </Head>
      <div className=''>
        <button id="darkmode" onClick={toggleDarkMode} className='text-[2rem] float-right pr-2 z-10'>🌙</button>
        <br></br>
      </div>
      <div>
        <h2 className='text-5xl font-bold pt-[1.5rem]'>kach0w</h2>
      </div>
      <div className='mb-[2vh] italic'>
        Trying to Learn New Things.
      </div>
      
      <div className='w-[15rem] sm:w-[30rem] dark:bg-slate-800 h-[7rem] sm:h-[15rem] text-[0.5rem] sm:text-base sm:h-[14rem] md:flex sm:flex relative rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] m-auto mb-[2rem] text-center'>
        <div className='absolute w-[7rem] sm:w-[15rem]  left-0 top-0'>
          <Image src={rusteze} alt="img" />
        </div>
        <div className='absolute text-[0.5rem] sm:text-[1rem] w-[8rem] sm:w-[15rem] pr-[1rem] sm:pr-[2rem] pt-[1rem] sm:pt-[1rem] text-center top-0 right-0'>
          Hello, welcome to my website.
          Check out some of my <a className='text-[#3b82f6] hover:underline' href="/projects">projects</a> and also view the <a className='text-[#3b82f6] hover:underline' href="/blog">blog</a> which I try (and mostly fail) to frequently update.
        </div>
        <div className='absolute w-[15rem] sm:w-[30rem] mx-auto text-center inset-x-0 bottom-0 pb-2 sm:pb-2'>
          <p>
            <a className='text-[#3b82f6] hover:underline' href="/comments">comment section</a>
            &nbsp;•&nbsp;
            <a className='text-[#3b82f6] hover:underline' href="/machinelearning-breastcancer.pdf">papers</a>
            &nbsp;•&nbsp;
            <a className='text-[#3b82f6] hover:underline' href="/resume.pdf">resume</a>
            {/* &nbsp;•&nbsp;
            <a className='text-[#3b82f6] hover:underline' href="/random">misc</a> */}
          </p>
        </div>
      </div>
      
      <h2 className='font-bold text-2xl underline mb-1'>About Me</h2>
      <div className='w-[15rem] dark:bg-slate-800 sm:w-[30rem] md:flex rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[3vh] text-[0.5rem] sm:text-base'>
        I'm a high schooler trying to learn how to do new things with computers. Right now I am extremely interested in backend web development and learning more about machine learning.  
      </div>  
          
      <h2 className='font-bold text-2xl underline mb-1'>Contact</h2>
      <div className='w-[15rem] sm:w-[30rem] dark:bg-slate-800 sm:text-base text-[0.5rem] sm:text-[1rem] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[3vh]'>
        <div>
          <ul>
            <li>
              <b>GitHub: </b><a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">kach0w</a>
            </li>
            <li>
              <b>Email: </b><a className='text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com">kachow@duck.com</a>
            </li>
            <li>
              <b>Discord: </b><a className='text-[#3b82f6] hover:underline'>meiskachow</a>
            </li>
            <li>
              <b>Codeforces: </b><a className='text-[#3b82f6] hover:underline' href="https://codeforces.com/profile/kachowtime">kachowtime</a>
            </li>
          </ul>
        </div>
      </div>
              
      <h2 className='font-bold text-2xl underline mb-1'>Latest Blog Post</h2>
      <a href="/blog/summerupdate">
          <div className='w-[15rem] dark:bg-slate-800 sm:w-[30rem] text-[0.5rem] sm:text-base group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Summer Update</p>
            <p className='text-slate-600 dark:text-slate-300'>An update, on the summer, and how I've been productive-ish</p>
            <p className=' mt-2 text-[0.4rem] sm:text-sm text-slate-400 not-italic'>July 9th, 2023</p>          
          </div>  
      </a>
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
