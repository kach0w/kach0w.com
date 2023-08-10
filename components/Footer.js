import React from 'react'

const Footer = (tog) => {
  return (
    <div className={`w-[25rem] bg-[#f3f3f3] dark:bg-slate-900 mx-auto text-slate-500 text-sm font-normal ${tog ? 'dark' : ''}`}>
        <div class="float-left">
            <p>Fremont, California</p>
        </div>
        <div class="float-right">
            <a className='text-[#3b82f6] hover:underline' href="https://github.com/kach0w">GitHub </a>·
            {/* <a className='hover:text-slate-300' href="https://github.com/kach0w"><i class="fab fa-github"></i> GitHub</a> ·  */}
            <a className=' text-[#3b82f6] hover:underline' href="mailto:kachow@duck.com"> Email</a>
        </div>
    </div>
  )
}

export default Footer