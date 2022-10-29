import react,{useState} from 'react'
import profile from '../assets/profile.jpg'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar =() => {
    const[nav, setNav] = useState(false)
    //setNav will set nav to it's opposite value
    const handleClick = () => setNav(!nav)
return (
    <nav className ="fixed w-full h-[100px] flex justify-between items-center px-4 bg-gradient-to-r text-white from-sky-500 to-blue-800"> 
        <img src={profile} alt="My Profile" className="rounded-full object-cover w-20 h-20 m-5"/>
         {/* WebMenu*/}
            <ul className="hidden md:flex flex-row justify-between items-center " >
                <li className="text-spacing">Home</li>
                <li className="text-spacing">About</li>
                <li className="text-spacing">Skills</li>
                <li className="text-spacing">Work</li>
                <li className="text-spacing">Contact</li>
            </ul>

        {/* Hamburger*/}
        <div onClick={handleClick} className= "md:hidden z-10">
            {/*ternary function */}
            {!nav ? <FaBars/> : <FaTimes/>}
            {}
        </div>
        {/* mobile menu*/}
        <div className={!nav ? "hidden":"absolute top-0 left-0 w-full h-screen bg-gradient-to-r text-white from-sky-500 to-blue-800 flex flex-col justify-center items-center"}>
        <ul>
            <li className="py-6 text-4xl" >Home</li>
            <li className="py-6 text-4xl" >About</li>
            <li className="py-6 text-4xl" >Skills</li>
            <li className="py-6 text-4xl" >Work</li>
            <li className="py-6 text-4xl" >Contact</li>
            </ul>
        </div>
        {/*Icons*/}
        <div className="hidden">
        </div>
    </nav>
)
}

export default Navbar