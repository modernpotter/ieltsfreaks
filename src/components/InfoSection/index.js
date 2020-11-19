import React from 'react';
import { Button } from '../ButtonElements'; 
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Span1,
    Span2,
    BigSpan2,
    LaunchSpan,
    BigSpan6
    } from './InfoElements';

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    darkText,
    headLine, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2,
    to,
    span1,
    span2,
    parF,
    bigSpan1,
    bigSpan2,
    bigSpan3,
    launchSpan,
    bigSpan6
    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headLine}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                    {parF}  {bigSpan1} <Span1><Span2>{span2}</Span2>{span1}</Span1>{bigSpan3}<BigSpan2> {bigSpan2}</BigSpan2> 
                                    
                                </Subtitle>
                                <LaunchSpan>{launchSpan}<BigSpan6>{bigSpan6}</BigSpan6></LaunchSpan>
                                <BtnWrap>
                                    <Button 
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1: 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>                                    
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection
