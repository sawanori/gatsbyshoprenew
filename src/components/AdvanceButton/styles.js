import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

export const AdvanceButton = styled.button`

   &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 8rem;
        transition: all .2s;
        position: relative;
        font-size: 20px;

        //Change for the <button> element
        border: none;
        cursor: pointer;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(10,10,10,.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(10,10,10,.2);
    }
    
    &--white {
        background-color:#fff;
        color:#eee;

        &::after {
            background-color: #fff;
        }
    }

    &--green {
        background-color: green;
        color: green;

        &::after {
            background-color: green;
        }
`;
