import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    padding: 20px;
    border-radius: 60px;
    background-color: ${({theme}) => theme.violet100};
    transition: 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.violet200};
    }

    &.active {
        transition: 1s;
        background-color: ${({theme}) => theme.violet300};
    }
`;

const StyledNavItem = styled.li`
    display: inline-block;
    margin-right: 50px;
    list-style: none;
    border-radius: 60px;
    margin: 30px;
`;

const Navigation = () => (
    <nav>
        <ul>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/">
                    Images
                </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/fonts">
                    Fonts
                </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/videos">
                    Short videos
                </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/colors">
                    Colors
                </StyledNavLink>
            </StyledNavItem>
        </ul>
    </nav>
);

export default Navigation;