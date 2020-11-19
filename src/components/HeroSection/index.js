import React, {useState} from 'react';
import Video from '../../videos/video0.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
 } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (       
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>
                <HeroH1>Skyrocket to 7.0+ IELTS from Home.</HeroH1>
                <HeroP>
                    We are <span style={{ fontFamily: 'Brandon Grotesque Black', fontSize: '42px' }}><span style={{ fontFamily: 'Brandon Grotesque Black', color: '#E02E3A' }}>ielts</span> freaks </span>.
                </HeroP>
                <HeroP>
                    We Believe Anyone Can Score 7.0+ on the IELTS If Correctly Trained.
                </HeroP>
                <HeroP>
                    That's Why We Are Coming.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='aboutcourse' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        Skyrocket with Us {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
