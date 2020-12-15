import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { Search } from '../Search';
import { Link } from 'gatsby';

export function Header() {
  const LinkStyles = {
    color: 'black',
    fontWeight: "normal",
    textDecoration:"none"
  } 
  return (
    <HeaderWrapper>
      <div>
        <Link to="/" style={LinkStyles}>
          <Logo />
        </Link>
      </div>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
}
