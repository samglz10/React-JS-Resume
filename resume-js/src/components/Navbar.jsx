import react from 'react'
import profile from '../assets/profile.jpg'

const Navbar =() => {
return (
    <nav className ="fixed w-full h-[80px] flex justify-between items-center px-4 bg-lime-800"> 
        <img src={profile} alt="My Profile" className="rounded-full object-cover w-20 h-20 m-5"/>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar