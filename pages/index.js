import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import rusteze from '../assets/rusteze-3.png';
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
    <div className={`w-[100vw] text-[#343a40] dark:text-[white] bg-[#f3f3f3] dark:bg-slate-900 text-center font-sans ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <Script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous" />
      </Head>
      <div className=''>
        <button id="darkmode" onClick={toggleDarkMode} className='text-[1.5rem] float-right pr-2 z-10'>🌙</button>
        <br></br>
      </div>
      <div>
        <h2 className='text-[3rem] font-[700] pt-[1rem]'>kach0w</h2>
      </div>
      <div className='mb-[2vh] italic'>
        Trying to Learn New Things.
      </div>
      
      <div className='w-[15rem] sm:w-[30rem] dark:bg-slate-800 text-[0.5rem] sm:text-base sm:h-auto relative rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto mb-[2vh] text-center'>
        <div className='w-[15rem] sm:w-[30rem] mx-auto text-center top-0 '>
          <img className="mx-auto p-2"  src="https://embedlify.vercel.app/api/og?color=7a2e2d" />
        </div>
        <div className='w-[12rem] h-[12rem] sm:h-[10rem] sm:w-[30rem]'>
          <div className='inline-block w-[6rem] h-[6rem] sm:h-[9rem] sm:w-[14rem] pt-[11px]'>
            <Image className='w-[6rem] h-[6rem] sm:h-[8rem] sm:w-[9.5rem] mx-auto' src={rusteze} alt="img" />
          </div>
          <div className='inline-block text-[0.5rem] sm:text-[1rem] w-[6rem] h-[6rem] sm:h-[9rem] sm:w-[14rem] my-auto mr-[2rem] pt-[15px] align-top'>
            Hello, welcome to my website.
            Check out some of my <a className='text-[#3b82f6] hover:underline' href="/projects">projects</a> and also view the <a className='text-[#3b82f6] hover:underline' href="/blog">blog</a> which I try (and mostly fail) to frequently update.
          </div>
        </div>
       
        <div className='w-[15rem] sm:w-[30rem] mx-auto text-center inset-x-0 bottom-0 pb-2 sm:pb-2'>
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
      <div className='w-[15rem] dark:bg-slate-800 sm:w-[30rem] md:flex rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[2vh] text-[0.5rem] sm:text-base'>
        I'm a high schooler trying to learn how to do new things. I'm extremely interested in backend web development (mostly NodeJS) and machine learning where I do stuff with Jupyter Notebook and IBM Watson. Shoot me a message if you want to collaborate on something. I am always excited to do so.  
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
            {/* <li>
              <b>Codeforces: </b><a className='text-[#3b82f6] hover:underline' href="https://codeforces.com/profile/kachowtime">kachowtime</a>
            </li> */}
          </ul>
        </div>
      </div>
              
      <h2 className='font-bold text-2xl underline'>Latest Blog Post</h2>
      <a href="/blog/winterupdate">
          <div className='w-[15rem] dark:bg-slate-800 sm:w-[30rem] text-[0.5rem] sm:text-base group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[2vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900 dark:text-[white] not-italic'>Winter Update or: How I Need Better Titles, Oh Wait "So Long 2023!"</p>
            <p className=' mt-2 text-[0.4rem] sm:text-sm text-slate-400 not-italic'>December 11th, 2023</p>          
          </div>  
      </a>
      <div className='dark:bg-slate-900 bg-[#f3f3f3]'>
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
