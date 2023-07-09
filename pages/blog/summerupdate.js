import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer';
import Image from 'next/image'
import cf from '../../assets/cf.png';
import rate from '../../assets/rate-my-aps.png'

export default function summerupdate () {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>Summer Update - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>

            <div className='w-[50rem] mx-auto bg-white text-[#222]'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">⮤ Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>Summer Update </p>
                    <p className=' mt-2 text-md text-slate-400'>July 9th, 2023</p>
                </div>
                
                <p className='text-left'>
                  <br></br>
                  The time since my last blog post has been predictably too long so now I will try to give a longer than usual update.
                  <br></br>
                  <br></br>
                  This summer has been unusually more productive than usual for me in terms of doing more programming and maybe even going outside more🙀. I started doing Codeforces to try to advance my goals of reaching USACO gold and maybe even platinum by senior year. I stared actually taking the time to work on backend applications. And I even started doing lots of volunteer service. It’s been a lot of fun. 
                  Codeforces has given me the chance to be a part of a weird, fun community of people who all love the Web 2.0 aesthetic. 
                  <br></br>
                  <br></br>
                  Codeforces has given me the chance to be a part of a weird, fun community of people who all love the Web 2.0 aesthetic. 
                  <br></br>
                  <br></br>
                  <Image className='w-[50rem]' src={cf} />
                  <p className='text-center'>yeah.</p>
                  <br></br>
                  <br></br>
                  Admittedly, I have just gotten started and at the time I am writing this have a contest rating of 941 (still a newbie) but still, I’ve been learning a lot. 
                  <br></br>
                  <br></br>
                  As for actual web development, I have been advancing my skills with backend programming and now actually feel mostly comfortable with Javascript and regular old NextJS. I started working on a project with a group of other high schoolers called Rate My AP’s. I’ve been handling most of the web development and the project has given me the opportunity with advancing my skills with backend programming. For the legitimate first time I built a project with Firebase, a tool that allowed users to give a rating of 1-5 stars for each of their AP subjects. In addition to it, I also incorporated some User authentication to ensure that users only voted once for each subject. Authentication has always seemed like a far-off goal for me. It always seemed very complicated and I kept on putting it off feeling like I didn’t have the skills necessary to build a app with it. 
                  <br></br>
                  <br></br>
                  Well, firebase isn’t that hard. I was able to build the app and its just fun looking at that big colorful login button on the top right corner. 
                  <br></br>
                  <br></br>
                  <Image className='w-[50rem]' src={rate} />
                  <br></br>
                  <p className='text-center'>“colorful”, its grey</p>
                  <br></br>
                  <br></br>
                  Here’s the <a className='text-[#3b82f6] hover:underline' href="https://rate-my-aps.vercel.app">website</a> if you want to check it out.
                  <br></br>
                  <br></br>
                  As for using my hands on something not called a keyboard side of life its been great. I started volunteering again at my local library, building a “learning garden” and also being a Summer Adventure volunteer with one of my friends. Besides the library I have also been working for the Cities of San Jose and Fremont weekly in their parks and recreations volunteer department. I have met loads of cool new people, other high schoolers and even adults. 
                  <br></br>
                  <br></br>
                  Just yesterday, I had the strange, stupidly-fun experience of roaming the streets and downtown of San Jose biking to the Berryesa Bart station. Biking 25+ miles was strangely a fun way to spend my Saturday, in what otherwise would have probably been staying in my room playing video games and programming. 
                  <br></br>
                  <br></br>
                  This summer has been great. Hopefully I keep on staying productive-ish. 
                  <br></br>
                  <br></br>
                  And that’s a wrap, hopefully the next blog post doesn’t take 4 months (it will).
                  <br></br>
                  <br></br>
                  <p className='text-right'>
                      Till next time,
                      <br></br>
                      kach0w  
                  </p>
                </p>
                <Footer />
            </div>



            
            {/* <Footer /> */}
        </div>
    )
}
