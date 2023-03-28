import React from 'react'
import Head from 'next/head'
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div className='text-center bg-[#f3f3f3]'>
            <Head>
                <title>Wikipedia - kach0w</title>
                <meta name="description" content="kach0w's blog"></meta>
                <link rel="icon" href="/favicon.png"/> 
            </Head>

            <div className='w-[50rem] mx-auto bg-white text-[#222]'>
                <div className='mx-auto mt-[3rem] text-center'>
                    <a className='float-left text-[#3b82f6] hover:underline' href="https://kach0w.com/blog">Back</a>
                    <br></br>
                    <p className='font-bold group-hover:underline text-2xl text-slate-900'>Wikipedia</p>
                    <p className=' mt-2 text-md text-slate-400'>March 27, 2023</p>
                </div>
                
                <p className='text-left'>
                <br></br>
                    <p>A speech on Wikipedia, from Academic Decathlon. It's not really related to web development, but still interesting.</p>
                    <p>
                    <br></br>
                    <br></br>

                    Like most people my age, I spend a lot of time on the internet. Whether it’s messaging my
                    friends, playing video games, or doing homework, most of my time seems to revolve around a
                    few core websites. One is Gmail, another is Calendar for keeping track of things, and the third is
                    a site called Schoology which my school and teachers use to post assignments.
                    <br></br>
                    <br></br>

                    I hate these websites. They lack creativity and are just pieces of text that occasionally change
                    on a reload. And honestly, the same is true for most websites. However, for me, there is one
                    website that breaks free beyond semi-static text and really encapsulates what the internet is
                    supposed to be about.
                    <br></br>
                    <br></br>

                    That website is Wikipedia. I love Wikipedia, and I know what you’re thinking. “Uh oh. Seriously
                    Wikipedia?” But be honest how many of us use it almost every time we have a question. The
                    same stereotype we all have about Wikipedia is also the same one the world has about it, yet
                    Wikipedia is still the 8th most visited website on the internet.
                    <br></br>
                    <br></br>

                    The truth is, and I will proudly admit it, most of the things I know, most of the things I want to
                    know, and most of the things I do not care to know are all on Wikipedia.
                    <br></br>
                    <br></br>

                    Anything you want to learn can be found on Wikipedia. From extremely long articles on quantum
                    mechanics which I attempted to read when I’m bored, to short articles on a small cities in Italy,
                    anything and everything can be found on Wikipedia. No other website or resource can even
                    compare to the amount of information it contains. A small group of volunteers writes the articles,
                    not because they are paid or have anything to gain from spreading their knowledge, but
                    because it is just something they are passionate about. Wikipedia we see seems to have its
                    own sense of identity or community because of these people. These like-minded individuals
                    devote their time to just talking about the things they love.
                    <br></br>
                    <br></br>

                    That is what separates Wikipedia from other places on the web. This is also what makes me
                    love it so. The idea of hyperlinks connecting different web pages is in reality, all that the web is,
                    and no other website really grasps the idea more than Wikipedia. The same old logo, the same
                    old interface, and the same simplicity. All that is what drives people to Wikipedia even though it
                    doesn’t really have the flashiest interface and has looked the same way for over 20 years.
                    <br></br>
                    <br></br>

                    So the next time you ask Google a question, and see the first source as Wikipedia, cast away
                    any shame you may have by learning from it. Try to appreciate its beauty, its simplicity, and its
                    ability to provide the world information to anyone, anywhere, free of cost.
                    <br></br>
                    <br></br>

                    All that is what drives me to keep coming back, day after day, week after week, year after year,
                    learning something new each time.
                    <br></br>
                    <br></br>

                    Thank you for your time.
                    </p>
                    <p className='text-right'>
                        Till next time,
                        <br></br>
                        kach0w  
                    </p>
                </p>
            </div>



            
            {/* <Footer /> */}
        </div>
    )
}
// export default function Home() {
//     return (
//         <div className='text-center bg-[#141414]'>
//             <Head>
//                 <title>OpenAI - kach0w</title>
//                 <meta name="description" content="kach0w's blog"></meta>
//                 <link rel="icon" href="/favicon.png"/> 
//             </Head>
//             <div className='mx-auto mt-[5vh] mb-[10vh] max-w-[50vw] rounded-lg p-5 bg-white drop-shadow-xl  font-serif font-normal text-[2rem]'>
//                     <h2 className='font-serif text-[3rem] font-bold'>OpenAI</h2>
//                     <h2 className='font-serif font-bold text-[1rem]'>January 22, 2023</h2>
//                     <div className='pb-5 pt-5'>
                    
//             </div>  
//             <Footer />
//         </div>
//     )
// }
