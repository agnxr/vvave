import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, {css} from 'styled-components';

const StyledNavLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    padding: 20px;
    border-radius: 60px;
    background-color: #445bb7;
    transition: 0.3s;

    &:hover {
        background-color: #03175b;
    }

    &.active {
        transition: 1s;
        background-color: #030221;
    }
`;

const StyledNavItem = styled.li`
    display: inline-block;
    margin-right: 50px;
    list-style: none;
    border-radius: 60px;
    margin: 30px;
    @media (max-width: 450px) {
        margin: 60px;
    }
`;


const Navigation = () => (
    <nav>
        <ul>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/images">
                    Images
                </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/fonts">
                    Fonts
                </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/vectors">
                    Vectors
                </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
                <StyledNavLink exact activeclass="active"  to="/videos">
                    Short videos
                </StyledNavLink>
            </StyledNavItem>
        </ul>
    </nav>
);

export default Navigation;