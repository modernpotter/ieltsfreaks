import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFive, homeObjSix, homeObjSeven  } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

// import { render } from '@testing-library/react'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
        return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />            
            <InfoSection {...homeObjSix} />     
            <InfoSection {...homeObjFive} />  
            <Services />
            <InfoSection {...homeObjSeven} />
 
            <Pricing />            
            <InfoSection {...homeObjThree} />                 
            <Footer/>

        </>
    );
};

export default Home
