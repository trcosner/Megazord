import React from 'react';
import styled from 'styled-components';
import { Toolbar } from 'rebass';

import HeaderLink from "./HeaderLink";

const Header = () => (
    <Toolbar>
        <Title>Megazord</Title>
        <HeaderLink exact to="/">
            Home
        </HeaderLink>
        <HeaderLink to="/charting">Charting</HeaderLink>
        <HeaderLink to="/derp">Derp</HeaderLink>
    </Toolbar>
);

const Title = styled.div`
    font-weight: bold;
    margin-right: 10px;
`;

export default Header;
