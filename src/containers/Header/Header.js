// Modules
import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled('header')`
    ${({ theme }) => `
        background: ${theme.colors.green1};
        color: #ffffff;
        position: relative;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items: stretch;
    `}
`;

function Header() {
    return <HeaderStyled>O Boticário</HeaderStyled>;
}

export default Header;
