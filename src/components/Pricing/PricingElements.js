import styled from 'styled-components'

export const PricingContainer = styled.div`
    height: 1700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 4000px;
        
    }

    @media screen and (max-width: 768px) {
        height: 4000px;
        
    }

    @media screen and (max-width: 480px) {
        height: 4500px;
    }
`

export const PricingWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        
    } 

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding 0 20px;
    }

    
`

export const PricingCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 1530px;
    min-height: 1220px;
    max-width: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 35px;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        width: 250px;
    }
`
export const PricingMid = styled.div`
    background: #fff;;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 500px;
    border-radius: 10px;
    height: 1340px;    
    padding: 30px;    
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    font-size: 1rem;
    @media screen and (max-width: 1000px) {
        height: 1160px;
    } 

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding 0 20px;
        height: 1160px;
    }

    @media screen and (max-width: 480px) {
        width: 250px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }    
`

export const PricingIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;    
`

export const PricingH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 88px;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 1080px) {
        margin-bottom: 64px;

    }`

export const PricingH2 = styled.h2`
    font-size: 1.85rem;
    margin-bottom: 10px;
    margin-top: 15px;
    
`

export const PricingMidH2 = styled.h2`
    font-size: 2.35rem;
    margin-bottom: 15px;
    text-align: center;
    line-height: 1.42857143;
    @media screen and (max-width: 1000px) {
      margin-top: 25px;
    } 
`

export const PriceTag = styled.div`
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
    vertical-align: bottom;
    color: #414141;
    box-sizing: border-box;
    text-align: center;
    font-family: "Lato",sans-serif;
`

export const PriceBg1 = styled.div`
    background-color: #f6f6f6;
    box-sizing: border-box;
    max-width: 500px;
    text-align: center;
    display: block;
    box-sizing: border-box;
    display: table;
    border-radius: 10px;
    padding-right: 15px;
    padding-left: 15px;
`

export const BenContainer = styled.div`
    margin-top: 25px;
    font-family: "Lato",sans-serif;
`

export const PricingUl = styled.ul`
    display: block;
    list-style-type: disc;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
`

export const PricingLi = styled.li`
    display: list-item;
    list-style: none;
    line-height: 1.42857143;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    padding: 15px 0;
    transition: all 0.3s ease-in-out 0s;
    color: '#414141'
`

export const PricingDiv = styled.div`    
    text-align: center;
    box-sizing: border-box;
    display: block;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.42857143;
    color: #333;

`

export const GreenTick = styled.svg`
    width: 15px;
    color: rgb(2, 32, 60);
    margin: 3px 10px 0px 0px;
    flex: 0 0 auto;
    color: rgb(0, 135, 0);
    box-sizing: border-box;
    fill: currentcolor;
    list-style-type: none;
`

export const RedTick = styled.svg`
    width: 15px;    
    margin: 3px 10px 0px 0px;
    flex: 0 0 auto;
    color: #890023;
    box-sizing: border-box;
    fill: currentcolor;
    list-style-type: none;
`

export const DarkTick = styled.svg`
    width: 15px;    
    margin: 3px 10px 0px 0px;
    flex: 0 0 auto;
    color: #02203c;
    box-sizing: border-box;
    fill: currentcolor;
    list-style-type: none;
`

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: #000;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 15px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01BF71;
    }
`