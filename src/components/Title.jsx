import React from 'react'
import { gh_icon, li_icon } from '../assets';

const Title = () => {
  return (
    <div>
        <nav className="flex justify-between items-center w-full mb-10 pt-3">

            <div>
                <button 
                onClick={() => window.open('https://www.linkedin.com/in/ryanyukihuang/')}
                className='nav_icon mr-2'>
                    <img src={li_icon}/>
                </button>
                <button
                onClick={() => window.open('https://github.com/huangr0867')}
                className='nav_icon'>
                    <img src={gh_icon}/>
                </button>
            </div>
        </nav>
        <h2>
            Balance:
        </h2>
    </div>
  )
}

export default Title