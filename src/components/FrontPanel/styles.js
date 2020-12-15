import styled from 'styled-components'
import {css} from 'styled-components'
import background from "./doyaji.png"
export const FrontPanelStyle = styled.div`
font-size:10px;
height:85vh;
color:#fff;
background-image: url(${background});
background-image: linear-gradient(
        to right bottom,
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)),
    url(${background});
background-size: cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`