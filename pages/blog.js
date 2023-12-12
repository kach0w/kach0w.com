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
        View it here, or on my "main" <a href="https://bloggger.vercel.app/blog?emailAddress=karsab343@gmail.com">blog</a> on Bloggger.
      </div>
      <ul>
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/winterupdate">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.agedcareguide.com.au%2Fassets%2Fnews%2Farticles%2Fmerry-xmas.jpg&f=1&nofb=1&ipt=eb52867181264b14566f5b592245d1cb3c8462f850c541694379b7deefc378b5&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>Winter Update or: How I Need Better Titles, Oh Wait Actually "So Long 2023!"</h2>
              <h2 className='text-left text-[15px]'>12-11-23</h2>
            </div>
          </div>
          </a>
        </li> 
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/summerupdate">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-0meZkZQmkjI%2FTjnuG-7DjwI%2FAAAAAAAAn2M%2FTzJ7sIQFRLg%2Fs1600%2FSummer%2Bsky.jpg&f=1&nofb=1&ipt=4f6210c6ce9361bb263fbfe0a051846e4eb62a8322a9d42fe22928b188e2f77f&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>Summer Update or: How I Started Being "Productive"</h2>
              <h2 className='text-left text-[15px]'>07-09-23</h2>
            </div>
          </div>
          </a>
        </li>  
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/wikipedia">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4B-q0pJAU3t6WUZznaAbqgHaEK%26pid%3DApi&f=1&ipt=f12620897bf32d452a9b26e15704e0a7da2f323e8b1c499046a31d803775507a&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>A Speech on Wikipedia</h2>
              <h2 className='text-left text-[15px]'>03-27-23</h2>
            </div>
          </div>
          </a>
        </li>  
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/express">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A805%2F1*t40l2rOzSEXZbvGWClW-Pw.png&f=1&nofb=1&ipt=9949746dd28fcfd54295aef0cc07a0fbecbf17826fc9aca1fa2ca6573b4095a3&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>A Step Into Express</h2>
              <h2 className='text-left text-[15px]'>02-22-23</h2>
            </div>
          </div>
          </a>
        </li>  
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/openai">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.trE6pDtUHHqDMddpeKL5oAHaEK%26pid%3DApi&f=1&ipt=b6ff663f1063f9fe1cb8e7fa5408d1deab014c5fc0021dc9e9585586fb4f382f&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>Some Words on OpenAI</h2>
              <h2 className='text-left text-[15px]'>01-22-23</h2>
            </div>
          </div>
          </a>
        </li>  
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/statistics">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://statisticsglobe.com/wp-content/uploads/2019/10/figure-2-barplot-in-color-in-R-programming-language.png"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>Learning Some Stats with ChartJS"</h2>
              <h2 className='text-left text-[15px]'>09-04-22</h2>
            </div>
          </div>
          </a>
        </li>  
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/pokedex">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825800omhst.png&f=1&nofb=1&ipt=aeff9430583a0c708c91a1a8b60c012d31c8ca6e289832774a721e4dffa2df00&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>Making a Pokédex</h2>
              <h2 className='text-left text-[15px]'>06-21-22</h2>
            </div>
          </div>
          </a>
        </li>  
        <li className='w-[650px] py-[50px] mx-auto'>
          <a href="/blog/javascript">
          <div >
            <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yU-6wV1RbGA-AH0AkbzkJQHaD4%26pid%3DApi&f=1&ipt=f9dfaf5386234f665bf2071f7a6f4badbe6757da4daf6a2c1e65690acdeaca02&ipo=images"></img>
            <div className='inline-block pl-[50px] w-[300px]'>
              <h2 className='text-left text-[20px]'>Learning Javascript</h2>
              <h2 className='text-left text-[15px]'>04-16-22</h2>
            </div>
          </div>
          </a>
        </li>  
      </ul> 


    </div>
  )
}
