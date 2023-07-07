import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import rusteze from '../assets/rusteze-2.png';

export default function Home() {
  return (
    <div className='w-[100vw] text-[#222] h-[100vh] bg-[#f3f3f3] text-center'>
      <Head>
        <title>kach0w</title>
        <meta name="description" content="kach0w's website"></meta>
        <link rel="icon" href="/favicon.png"/>  
        <Script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous" />
      </Head>
      <h2 className='font-extrabold text-3xl mt-[3vh] mb-[1vh]'>kach0w</h2>
      <div className='mb-[2vh]'>
        Trying to Learn New Things.
      </div>
      
      <div className='w-[30rem] h-[14rem] relative rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] m-auto mb-[2rem] text-center'>
          <div className='absolute w-[15rem]  left-0 top-0'>
            <Image src={rusteze} alt="img"/>
          </div>
          <div className='absolute w-[15rem] pr-[2rem] pt-[2rem] text-center top-0 right-0'>
            Hello, welcome to my website.
            Check out some of my <a className='text-[#3b82f6] hover:underline' href="/projects">projects</a> and also view the <a className='text-[#3b82f6] hover:underline' href="/blog">blog</a> which I try (and mostly fail) to frequently update. 
          </div>
          <div className='absolute w-[30rem] h-[] mx-auto text-center inset-x-0 bottom-0'>
            <p>
              <a className='text-[#3b82f6] hover:underline' href="/comments">comment section</a>
              &nbsp;•&nbsp;
              <a className='text-[#3b82f6] hover:underline' href="/publications">papers</a>
              &nbsp;•&nbsp;
              <a className='text-[#3b82f6] hover:underline' href="/random">misc</a>
            </p>
          </div>
      </div>
      <h2 className='font-bold text-2xl underline mb-1'>About Me</h2>
      <div className='w-[30rem] md:flex rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[3vh]'>
        I am a high schooler trying to learn new things in Computer Science. Right now I am trying to learn backend also want to learn more about machine learning in web applications. 
      </div>  
      <h2 className='font-bold text-2xl underline mb-1'>Contact</h2>
      <div className='w-[30rem] rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[3vh]'>
        <div>
          <ul>
            <li>
              <b>GitHub: </b><a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">kach0w</a>
            </li>
            <li>
              <b>Email: </b><a className='text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com">kachow@duck.com</a>
            </li>
            <li>
              <b>Discord: </b><a className='text-[#3b82f6] hover:underline'>kachow#9170</a>
            </li>
          </ul>
        </div>
      </div>
      <h2 className='font-bold text-2xl underline mb-1'>Latest Blog Post</h2>
      <a href="/blog/wikipedia">
          <div className='w-[30rem] group rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.30)] mx-auto p-3 mb-[3vh] text-left'>
            <p className='font-bold group-hover:underline text-slate-900'>Wikipedia</p>
            <p className='text-slate-600'>A speech from the Academic Decathlon competition on Wikipedia, not really web dev but still about technology in general</p>
            <p className=' mt-2 text-sm text-slate-400'>March 27, 2023</p>
          </div>  
        </a>
      <Footer />
    </div>
    
  )
}
