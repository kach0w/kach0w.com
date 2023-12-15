import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer';
import Image from 'next/image'
import cf from '../../assets/spotify.png'
export default function winter () {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>Winter Update - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>

            <div className='w-[50rem] mx-auto bg-[#f3f3f3] text-[#222] font-serif'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">⮤ Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>Winter Update </p>
                    <p className=' mt-2 text-md text-slate-400'>December 11th, 2023</p>
                </div>
                
                <p className='text-left'>
                Just as it was stunningly predicted in my last blog post–it’s been a while. Or to be exact 5 months and 2 days. A new record! 🎉
                I haven’t really done much on the website over these last couple of months; school has hit hard. 
                Anyway, things have been picking up recently so I’m gonna update the projects with some new stuff I’ve done. 
                <br></br><br></br>
                Now that that’s out of the way, let me get started with this update. There’s nothing really central about this blog post so I guess it’s time to continue with the uncreative name arc: “Winter Update or: I Need Better Names”. 
                <br></br><br></br>
                Did some things on GitHub:<br></br>
                <ul className='pl-[20px]'>
                    <li>1. Finally finished the Rate My AP’s project - never really went anywhere but whatever<br></br></li>
                    <li>2. Dogmash - I guess I wanted to learn about ELO?<br></br></li>
                    <li>3. Cron Sentiment Analysis - Just a fork<br></br></li>
                    <li>4. News Classifier - It’s been a fun weekend, let me actually talk a bit about it.<br></br><br></br></li>
                </ul>
                
                Ok, so News Classifier. That along with the Audax Labs Internship project are the main things I’ve been doing this weekend (and I guess this blog, what a momentous occasion). I have been doing all this stuff while grinding a playlist of the Smiths, my Spotify Stats are going to be crazy:
                <br></br>
                <Image className='w-[30rem] mx-auto' src={cf} />
                <p className='text-center'>Credit to Stats for Spotify.</p><br></br><br></br>
                So the News Classifier. I don’t know I guess I wanted to do stuff with Machine Learning and Web Dev. More importantly, this project has confirmed a long-standing suspicion of mine: python SUCKS for web dev. Never using Streamlit again - 2/10 (admittedly, I used it again with the internship, though that’s probably gonna change).  
                <br></br><br></br>
                What else was I gonna talk about? I don’t know.
                Well, I guess that’s it.
                <br></br><br></br>
                Merry Christmas! 🧑‍🎄 Happy Hanukkah! Happy New Year!
                <br></br><br></br>
                See you in another 5 months and 2 days! 👋
                <br></br><br></br>

                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>

                </p>
                <Footer />
            </div>



            
            {/* <Footer /> */}
        </div>
    )
}
