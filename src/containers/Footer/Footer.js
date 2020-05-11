// Modules
import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled('footer')`
    ${({ theme }) => `
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.green1};
        color: ${theme.colors.white};
    `}
`;

function Footer() {
    return <FooterStyled>Footer</FooterStyled>;
}

export default Footer;
