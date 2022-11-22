import React from 'react'

const Projects = () => {
  return (
    <div className='pt-[4vh] justify-center text-center h-[100vh] w-[100vw]'>
        <div className='pt-5'>
            <h1 id="about" className='font-serif font-bold text-[7em] text-[#15171a]'>Projects</h1>
        </div>
       <div className='grid mx-auto w-[64vw] pl-[1vw] grid-cols-3 space-y-4'>
            {/* Project 1 */}
            <a href="https://pokedex.kachow.me">
                <div className='bg-slate-800 rounded-lg px-6 py-8 mt-4 ring-1 w-[20vw] h-[20vh] hover:bg-slate-900'>
                    <h2 class="text-white text-base tracking-tight font-black">Pokédex</h2>
                    <p class="text-slate-500 mt-2 text-sm">
                        Search and view different pokemon with the PokeAPI                
                    </p>
                    <p class="text-slate-500 font-bold mt-2 text-sm">React · JS · HTML</p>                    
                </div>
            </a>
            {/* Project 2 */}
            <a href="https://kach0w-statistics.herokuapp.com/">
                <div className='bg-slate-800 rounded-lg px-6 py-8 ring-1 w-[20vw] h-[20vh] hover:bg-slate-900'>
                    <h2 class="text-white text-base tracking-tight font-black">Statistics - Chart JS</h2>
                    <p class="text-slate-500 mt-2 text-sm">
                        Used the JS library Chart JS to display statistics                
                    </p>
                    <p class="text-slate-500 font-bold mt-2 text-sm">React · ChartJS</p>                    
                </div>
            </a>
            {/* Project 3 */}   
            <a href="https://kachow.me/Calculator/calculator">
                <div className='bg-slate-800 rounded-lg px-6 py-8 ring-1 w-[20vw] h-[20vh] hover:bg-slate-900'>
                    <h2 class="text-white text-base tracking-tight font-black">Apple Calculator</h2>
                    <p class="text-slate-500 mt-2 text-sm">
                        Tried to make a recreation of the Apple calculator                
                    </p>
                    <p class="text-slate-500 font-bold mt-2 text-sm">CSS · JS · HTML</p>                    
                </div>
            </a>
            {/* Project 4 */}    
            <a href="https://kachow.me/Weather/weather">                 
                <div className='bg-slate-800 rounded-lg px-6 py-8 ring-1 w-[20vw] h-[20vh] hover:bg-slate-900'>
                    <h2 class="text-white text-base tracking-tight font-black">Weather Forecast</h2>
                    <p class="text-slate-500 mt-2 text-sm">
                        Your location's weather, in a pretty accurate way          
                    </p>
                    <p class="text-slate-500 font-bold mt-2 text-sm">React · JS · HTML</p>                    
                </div>
            </a>
            {/* Project 5 */}      
            <a href="https://scores.kachow.me">               
                <div className='bg-slate-800 rounded-lg px-6 py-8 ring-1 w-[20vw] h-[20vh] hover:bg-slate-900'>
                    <h2 class="text-white text-base tracking-tight font-black">NBA Live Scores</h2>
                    <p class="text-slate-500 mt-2 text-sm">
                        The first NBA related project I made from a tutorial                
                    </p>
                    <p class="text-slate-500 font-bold mt-2 text-sm">React · JS · HTML</p>                    
                </div>
            </a>
            {/* Project 6 */}
            <a  href="https://stats.kachow.me">
                <div className='bg-slate-800 rounded-lg px-6 py-8 ring-1 w-[20vw] h-[20vh] hover:bg-slate-900'>
                    <h2 class="text-white text-base tracking-tight font-black">NBA Player Stats</h2>
                    <p class="text-slate-500 mt-2 text-sm">
                        Part of NBA related stuff I made using the Balldontlie API             
                    </p>
                    <p class="text-slate-500 font-bold mt-2 text-sm">React · JS · HTML</p>                    
                </div>
            </a>
       </div>
    </div>
  )
}

export default Projects