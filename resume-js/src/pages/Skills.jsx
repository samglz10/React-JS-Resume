import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Javascriptlogo from '../assets/javascriptlogo.png' 
//Don;t forget to Import images for 
import {SiJavascript} from 'react-icons/si'
const Skills = () => {
    return (
        <div name='skills' className=' max-w-full h-screen w-full bg-slate-700 text-white flex flex-col justify-center px-4 '> 
        {/*Container */}  
            <div>
                <div>
                    <p className='text-4xl text-white py-1 font-bold inline border-b-4 border-sky-500'>Skills</p>
                    <p className='py-4'> The Languages I have worked with</p>
                </div>
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 pag-4 text-center py-8'>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                        <p className='my-4'>Add frameworks and backend</p>
                    </div>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                    </div>                    <div className='shadow-md shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto'/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;