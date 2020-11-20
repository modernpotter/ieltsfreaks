import React from 'react'
import Icon1 from '../../images/savings.svg'
import Icon2 from '../../images/moretime.svg'
import Icon3 from '../../images/family.svg'

import { 
        ServicesContainer, 
        ServicesH1, 
        ServicesWrapper, 
        ServicesCard, 
        ServicesIcon, 
        ServicesH2, 
        ServicesP
    } from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id="whatyouget">
            <ServicesH1>
                What You Get
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>                    
                    <ServicesH2>Extremely Affordable but Far Better.</ServicesH2>
                    <ServicesP>Average preparation at a learning centre = 2 000 000 soums / 4 months, not including the transportation costs and eating out. Oh, you also study with 15 other people in the group, and it doesn't help that the lesson lasts 1.5 hours. As you will see below, the Blueprint costs ridiculously less but is FAR better. We Promise That. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>                    
                    <ServicesH2>More Time.</ServicesH2>
                    <ServicesP>You can access the course in your free time, according to your schedule, when you can concentrate. Because when you are concentrated you learn better and more in less time, you will be efficient with your IELTS prep, learning more while spending fewer hours on it and having more time for other aspects of life that matter. </ServicesP>
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Safe Family.</ServicesH2>
                    <ServicesP>In these strange times of COVID-19, even though schools've opened, we sincerely believe it's better to minimise contact with others outside home because it substantially increases the risk of (re)catching COVID-19 and 'presenting' it to your loved ones.</ServicesP>

                </ServicesCard>
                
            </ServicesWrapper>            
        </ServicesContainer>
            
    
    )
}

export default Services
