import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo_light from '../../public/PNG/Full colour Purple.png'
import logo_dark from '../../public/PNG/Full colour White.png'

const links = [
    { title: "Home", link: "home" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Blog", link: "blog" },
    { title: "Contact", link: "contact" }
]

const Navigation = () => {

    const [darkMode, setDarkMode] = React.useState<boolean | undefined>(undefined);

    const switchMode = () => {
        setDarkMode(!darkMode);
    };

    React.useEffect(() => {
        if (darkMode) {
            localStorage.setItem('darkMode', 'true');
            window.document.documentElement.classList.add('dark');
        } else if (darkMode === false) {
            localStorage.setItem('darkMode', 'false');
            window.document.documentElement.classList.remove('dark');
        } else {
            setDarkMode(localStorage.getItem('darkMode') === 'true');
        }
    }, [darkMode]);

    return (
        <nav className='sticky top-0 w-full max-w-screen-2xl mx-auto bg-white dark:bg-primary-bg h-[60px] shadow-md flex items-center justify-between px-3 sm:px-0 xl:px-[50px]'>
            <div className='w-full h-full container mx-auto flex items-center justify-between'>
                <Link to="/home">
                    {
                        darkMode ? <img src={logo_dark} alt="" className='w-[150px]' /> : <img src={logo_light} alt="" className='w-[150px]' />
                    }
                </Link>

                <div className='hidden space-x-5 lg:flex items-center'>
                    {
                        links.map((link: { title: string, link: string }, Idx: number) => (
                            <NavLink
                                to={`/${link.link}`}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active capitalize font-bold text-small-heading" : "capitalize  text-xs font-medium dark:text-white"
                                }
                                key={Idx}
                            >
                                {link.title}
                            </NavLink>
                        ))

                    } 
                    <span className='px-3 dark:text-white'>|</span>
                    <button onClick={switchMode}>{darkMode ? <span className='text-white font-bold text-lg'>&#9788;</span> : <span className='font-bold text-lg'>&#9789;</span>}</button>
                </div>

                <button className='lg:hidden text-black dark:text-white'><span>&#9776;</span></button>

            </div>
        </nav>
    )
}

export default Navigation