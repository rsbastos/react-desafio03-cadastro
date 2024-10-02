import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;    

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 374px;
    height: 450px;   
`

export const Column = styled.div`
    flex: 1; 
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-top: 15px;   
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;     
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;    
    margin-bottom: 8px;
    line-height: 44px;     
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;   
    margin-top: 20px;   
    margin-bottom: 35px;
    line-height: 25px;   
`

export const TenhoContaText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;        
    line-height: 19px; 
    margin-right: 15px; 
    
    color: #FFFFFF;
`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;        
    line-height: 19px;  
    
    color: #23DD7A;

    &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
`
