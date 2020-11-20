import React from 'react'
import {animateScroll as scroll } from 'react-scroll';

import {
    FaInstagram,
    FaTelegram
} from 'react-icons/fa'

import {
        FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink, 
        SocialMedia, 
        SocialMediaWrap,
        WebsiteRights, 
        SocialIcons, 
        SocialIconLink,
        FooterLogo,
        ExtLink
} from './FooterElements';

import Logo1 from '../../images/footerLogo.png'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer id='footer'>
           
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>  Contact Us</FooterLinkTitle>
                            <FooterLink target="_blank" rel="noreferrer"><ExtLink href="tel:99-316-3111">Call Us: 99 316 3 111</ExtLink></FooterLink>
                            <FooterLink target="_blank" rel="noreferrer"><ExtLink href="//www.t.me/dawoudabdullaev">Telegram</ExtLink></FooterLink>
                            <FooterLink target="_blank" rel="noreferrer"><ExtLink href="mailto: ieltsfreaks@gmail.com">Email: ieltsfreaks@gmail.com</ExtLink></FooterLink>
                            <FooterLink target="_blank" rel="noreferrer"><ExtLink href="sms:+998 99 316 3 111&body=Hi! You are Texting IELTS freaks">Send SMS</ExtLink></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <FooterLogo to="/" onClick={toggleHome}>
                            <img src={Logo1} alt="ielts freaks logo" />
                        </FooterLogo>
                        <WebsiteRights>
                            <span style={{ fontFamily: 'Brandon Grotesque Black', fontSize: '22px' }}><span style={{ fontFamily: 'Brandon Grotesque Black', color: '#E02E3A' }}>ielts </span>freaks </span> © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>                            
                            <SocialIconLink href="//www.instagram.com/ielts_freaks" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//wwww.t.me/ieltsfreaks" target="_blank" aria-label="Telegram">
                                <FaTelegram/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Footer
