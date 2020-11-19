import React from 'react'
import { Button } from '../ButtonElements'; 
import Icon1 from '../../images/student.svg'
import Icon2 from '../../images/legend.svg'
import Icon3 from '../../images/pro.svg'

import { 
        PricingContainer, 
        PricingH1, 
        PricingWrapper, 
        PricingCard, 
        PricingIcon, 
        PricingH2, 
        PricingDiv,
        PricingMid,
        PricingMidH2,
        PriceTag,
        PriceBg1,
        BenContainer,
        PricingUl,
        PricingLi,
        DarkTick,
        GreenTick,
        RedTick,
        BtnWrap
    } from './PricingElements';    

const Pricing = (
    {
        to,
        primary,
        buttonLabel,
        dark,
        dark2
    }
) => {
    return (
        <PricingContainer id="pricing">
            <PricingH1 style={{textAlign: 'center'}}>
                Everything You Need. For an Unbeatable Price.
            </PricingH1>
            <PricingWrapper>
                <PricingCard>                                        
                    <PricingH2><span style={{ textTransform: 'inherit' }}>IELTS</span><span style={{textTransform: 'inherit'}}> Student</span></PricingH2>
                    <PricingIcon src={Icon1} />
                    <PriceBg1>
                        <PriceTag>

                            <div>
                                <br></br>
                                <span className="price" style={{ display: 'block', marginTop: '9px', marginBottom: '21px' }}>
                                    <span style={{fontSize: '15px', textTransform: 'inherit' }} className="sign">UZS</span>
                                    <span style={{fontSize: '40px', textTransform: 'inherit', verticalAlign: 'middle', lineHeight: '55px' }} className="currency"> 982</span>
                                    <span style={{fontSize: '23px', textTransform: 'inherit', verticalAlign: 'bottom' }} className="cent">000</span>
                                    <span style={{fontSize: '18px', textTransform: 'inherit', letterSpacing: '4px', verticalAlign: 'bottom' }} className="month">/YEAR</span>
                                </span><br></br>
                            </div>
                        </PriceTag>
                    </PriceBg1>
                    <BenContainer>
                        <PricingDiv>
                            <PricingUl>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Full Coverage of IELTS Listening.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Full Coverage of IELTS Academic Reading.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Full Coverage of IELTS General Reading (soon).</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Full Coverage of IELTS Academic Writing.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Full Coverage of IELTS General Writing (soon).</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Full Coverage of IELTS Speaking.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> <span>24/7</span> Online Access from Mobile and PC.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Multiple Exercises in Every Module.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Homework for Each Module.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Bonus Recommended Reading, Listening, Speaking, Writing Materials.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> No Need to Go to a Learning Centre.</PricingLi>
                                <PricingLi><DarkTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></DarkTick> Easily and Safely Can Prepare At Home.</PricingLi>
                            </PricingUl>
                        </PricingDiv>
                    </BenContainer>
                    <BtnWrap>
                        <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            style={{ textDecoration: 'none', marginTop: '25px' }}
                            href="//t.me/hehe"
                        >Purchase</Button>
                    </BtnWrap>       
                </PricingCard>

                <PricingMid>
                    <PricingMidH2>IELTS Legend <p style={{fontSize: '22px'}}>(IELTS Student + IELTS Pro)</p></PricingMidH2>                                                                                                  
                    <PricingIcon src={Icon2} />
                    <PriceBg1> 
                    <PriceTag>
                        
                        <div>
                            <br></br>
                            <span className="price" style={{ display: 'block', marginTop: '9px'}}>
                                <span style={{textTransform: 'inherit', fontSize: '15px'}} className="sign">UZS </span>
                                    <span style={{ textDecoration: 'line-through', fontSize: '40px', textTransform: 'inherit', verticalAlign: 'bottom', lineHeight: '50px' }} className="currency">2</span><span> </span>
                                <span style={{ textDecoration: 'line-through', fontSize: '40px', textTransform: 'inherit', verticalAlign: 'bottom', lineHeight: '60px' }} className="cent">148</span><span> </span>
                                <span style={{textDecoration: 'line-through', fontSize: '23px', textTransform: 'inherit'}} className="cent">000</span>
                                <span style={{ textDecoration: 'line-through', textTransform: 'inherit', fontSize: '18px', fontWeight: '400', letterSpacing: '3px'}} className="month">/YEAR</span>
                            </span>
                            <span className="price" style={{ display: 'block', marginTop: '9px' }}>
                                <span style={{textTransform: 'inherit', fontSize: '15px'}} className="sign">UZS </span>
                                <span style={{ color: '#fdcc02', textDecoration: 'line-through', fontSize: '35px', textTransform: 'inherit', verticalAlign: 'bottom', lineHeight: '50px'}} className="currency">1</span><span> </span>
                                <span style={{ color: '#fdcc02', textDecoration: 'line-through', fontSize: '35px', textTransform: 'inherit', verticalAlign: 'bottom', lineHeight: '50px'}} className="cent">347</span><span> </span>
                                <span style={{ color: '#fdcc02', textDecoration: 'line-through', fontSize: '20px', textTransform: 'inherit', verticalAlign: 'bottom'}} className="cent">000</span>
                                <span style={{color: '#fdcc02', textDecoration: 'line-through', textTransform: 'inherit', fontSize: '14px', fontWeight: '400', letterSpacing: '3px'}} className="month">/YEAR</span>
                            </span>
                            <span className="price" style={{ display: 'block', marginTop: '9px', marginBottom: '21px' }}>
                                <span style={{ color: '#e41b22', fontSize: '15px', textTransform: 'inherit'}} className="sign">UZS</span>
                                <span style={{ color: '#e41b22', fontSize: '30px', textTransform: 'inherit', verticalAlign: 'bottom', lineHeight: '50px'}} className="currency"> 982</span>
                                <span style={{ color: '#e41b22', fontSize: '20px', textTransform: 'inherit', verticalAlign: 'bottom'}} className="cent">000</span>
                                <span style={{ color: '#e41b22', fontSize: '14px', textTransform: 'inherit', letterSpacing: '4px', verticalAlign: 'bottom' }} className="month">/YEAR</span>
                            </span><br></br>
                            </div>                     
                    </PriceTag>
                    </PriceBg1>
                    <BenContainer>
                        <PricingDiv>
                            <PricingUl>
                                <PricingLi><GreenTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></GreenTick>
                                   Everything <b>IELTS Student </b> Offers.</PricingLi>
                                <PricingLi><GreenTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></GreenTick> Everything <b>IELTS Pro</b> Offers.</PricingLi>
                                <PricingLi><GreenTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" ><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></GreenTick> Everything You Need to <b>KIll</b> the <b>IELTS</b>.</PricingLi>
                            </PricingUl>
                        </PricingDiv>                    
                    </BenContainer>
                    <PricingIcon style={{}}src={Icon2} />
                    <BtnWrap>
                        <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            style={{ textDecoration: 'none', marginTop: '25px'}}  
                            href="//t.me/hehe"                                                      
                        >Purchase</Button>
                    </BtnWrap>
                </PricingMid>

                <PricingCard>                    
                    <PricingH2>IELTS Pro</PricingH2>
                    <PricingIcon src={Icon3} />
                    <PriceBg1>
                        <PriceTag>
                            <div>
                                <br></br>
                                <span className="price" style={{ display: 'block', marginTop: '9px', marginBottom: '21px' }}>
                                    <span style={{ fontSize: '15px', textTransform: 'inherit' }} className="sign">UZS</span>
                                    <span style={{ fontSize: '40px', textTransform: 'inherit', verticalAlign: 'middle', lineHeight: '55px' }} className="currency"> 365</span>
                                    <span style={{ fontSize: '23px', textTransform: 'inherit', verticalAlign: 'bottom' }} className="cent">000</span>
                                    <span style={{ fontSize: '18px', textTransform: 'inherit', letterSpacing: '4px', verticalAlign: 'bottom' }} className="month">/MNTH</span>
                                </span><br></br>
                            </div>
                        </PriceTag>
                    </PriceBg1>
                    <BenContainer>
                        <PricingDiv>
                            <PricingUl>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> A Collection of 30+ Sample Essays.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> A Collection of 30+ Sample Reports.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> A Collection of 10+ Speaking Mock Tests.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Live Reading Passage Discussions.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Live Speaking Discussions.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Live Writing Discussions.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> 10+ Custom-Made Listening Exercises.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Private Helpful IELTS FREAKS Community.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Daily Chances to Win a Speaking Mock Test Every Week.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Daily Chances to Win a Writing Check Every Week.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Weekly Mock Exams.</PricingLi>
                                <PricingLi><RedTick xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M504.502 75.496c-9.997-9.998-26.205-9.998-36.204 0L161.594 382.203 43.702 264.311c-9.997-9.998-26.205-9.997-36.204 0-9.998 9.997-9.998 26.205 0 36.203l135.994 135.992c9.994 9.997 26.214 9.99 36.204 0L504.502 111.7c9.998-9.997 9.997-26.206 0-36.204z" stroke="currentColor" strokeWidth="5"></path></RedTick> Weekly Live Q&A Sessions.</PricingLi>
                            </PricingUl>                            
                        </PricingDiv>
                    </BenContainer>
                    <BtnWrap>
                        <Button
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            style={{ textDecoration: 'none', marginTop: '25px' }}
                            href="//t.me/hehe"
                        >Purchase</Button>
                    </BtnWrap>
                </PricingCard>
            </PricingWrapper>
        </PricingContainer>
            
    
    )
}

export default Pricing
