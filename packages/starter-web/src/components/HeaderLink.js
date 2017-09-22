import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const HeaderLink = ({ to, children, ...props }) => (
    <Route
        path={to}
        {...props}
        children={({ match }) => (
            <StyledLink to={to}>
                <StyledLinkInner active={match}>{children}</StyledLinkInner>
            </StyledLink>
        )}
    />
);

const StyledLink = styled(Link)`
    margin-right: 5px;
    text-decoration: none;
    font-weight: 100;
`;

const StyledLinkInner = styled.div`
    color: ${props => (props.active ? 'white' : 'grey')};
`;

export default HeaderLink;