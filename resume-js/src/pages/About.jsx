import React from 'react'


const About = () => {
    return (
        <div name="About" className='h-screen w-full text-white bg-slate-700'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="m-w-full w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm: text-right pb-8 pl-4">
                        <p className="text-3xl font-bold inline border-b-4 border-sky-500">About</p>
                    </div>
                </div>
                <div className="m-w-full w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm: text-right pb-8 pl-4">
                        <p className="text-3xl font-bold inline border-b-4 border-sky-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro fuga amet deserunt ipsum atque quae molestiae odio reiciendis harum incidunt ab iste cumque deleniti, optio excepturi! 
                            Quaerat nesciunt excepturi ipsa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About