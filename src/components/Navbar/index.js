import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo1 from '../../images/sitelogo.svg'
import {Nav, 
        NavbarContainer, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLogo, 
        NavLinks,
        NavBtn,
        NavBtnLink
    } from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src={Logo1} alt="ielts freaks logo"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="aboutcourse"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                            About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="discover"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="whatyouget"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >What You Get</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="beforepricing"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Pre-Launch</NavLinks>
                        </NavItem>
                            <NavItem>
                                <NavLinks to="pricing"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Pricing</NavLinks>
                            </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                            <NavBtnLink target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeORtomtVi1enxlTPhdzJ6UfdUi7AwQU_2yeal3N8lu1bvjMA/viewform?usp=sf_link">Apply Now</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
