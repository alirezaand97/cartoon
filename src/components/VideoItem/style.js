import styled from 'styled-components';
export const VideoCard=styled.div`
border-radius: 16px;
position: relative;
background: url(${(props) => props.cover});
height: 200px;
background-size: cover;
cursor: pointer;
`

export const VideoTitle=styled.div`
position: absolute;
bottom: 8px;
right: 8px;
color: #FFFFFF;
font-size:1.1rem;
font-family: 'YekanBakhBold';
`

export const Duration=styled.div`
     position: absolute;
    top: 8px;
    left: 8px;
    color: #FFFFFF;
    font-size: .85rem;
    background: rgba(0,0,0,0.4);
    padding: 1px 10px;
    border-radius: 8px;
`

