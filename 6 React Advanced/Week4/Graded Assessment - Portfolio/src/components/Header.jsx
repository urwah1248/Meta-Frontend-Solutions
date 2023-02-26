import {Github, Twitter, Linkedin, StackOverflow, Medium} from '../assets/icons'
import { useState, useRef, useEffect } from 'react'

const Icon = ({ link, children, title  }) => {
    return(
        <a title={title} className='h-[30px] text-gray-300 hover:text-white' href={link} target="_blank">
            {children}
        </a>
    )
}

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const headerRef = useRef(null);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(
        prevScrollPos > currentScrollPos
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible, handleScroll]);

    return(
        <nav
        ref={headerRef}
        style={{transform: `transform(${0}px, ${visible?0:-200}px)`}}
        className={`flex justify-between z-10 bg-slate-800 px-4 h-12 items-center fixed w-full text-gray-100 transition-[200ms] -translate-y-${visible?'0':'12'}`}>
            <div className="flex gap-2">
                <Icon title='Click to visit my Github' link={'//github.com/urwah1248'}><Github/></Icon>
                <Icon title='Click to visit my LinkedIn' link={'https://www.linkedin.com/in/muhammad-urwah-053a38229/'}><Linkedin/></Icon>
                <Icon title='Click to visit my Twitter' link={'https://twitter.com/urwah1248'}><Twitter/></Icon>
                <Icon title='Click to visit my LinkedIn' link={'https://www.stackoverflow.com/'}><StackOverflow/></Icon>
                <Icon title='Click to visit my Twitter' link={'https://medium.com'}><Medium/></Icon>
            </div>

            <div className="nav-links flex items-center font-semibold">
                <a href="#projects" className='block my-auto px-2 hover:bg-black h-full leading-[3rem]'>Projects</a>
                <a href="#contact" className='block my-auto px-2 hover:bg-black h-full leading-[3rem]'>Contact Me</a>
            </div>
        </nav>
    )
}

export default Header