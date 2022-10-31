import react,{useState} from 'react';
import profile from '../assets/profile.jpg';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
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
        <div className="hidden lg:flex fixed flex-row left-0 top-1/2 ">
            <ul>
                <li className=" w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/"> LinkedIn <FaLinkedin size={40}/></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/"> Github <FaGithub size={40}/></a>
                </li>                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/"> Email <HiOutlineMail size={40}/></a>
                </li>                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/"> Resume <BsFillPersonLinesFill size={40}/></a>
                </li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar