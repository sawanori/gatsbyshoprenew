import React from 'react'
import {FrontPanelStyle} from './styles'
import {Button,AdvanceButton} from 'components'
import {Link} from 'gatsby' 
const LinkStyles = {
  color: 'black',
  fontWeight: "normal",
  textDecoration:"none"
}  
export function FrontPanel(){
  return (
    <FrontPanelStyle>
      <h1>自宅で味わうどやじの美味しさ</h1>
      <AdvanceButton><Link to={"/all-products"} style={LinkStyles}>商品をみる</Link></AdvanceButton>
    </FrontPanelStyle>
  )
}
