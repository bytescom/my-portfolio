import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[90px] w-full flex items-center px-[8rem] border-white border-b-[2px] dash-h'>
            <div className='h-full w-full border-white border-x-[2px] dash-v flex items-center justify-between'>
                <div className=''>Pankaj Kumar</div>
                <div className='flex items-center'>
                    <ul className='flex items-center'>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>What I Do</li>
                    </ul>
                    <button className=''>
                        Let's Talk!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
