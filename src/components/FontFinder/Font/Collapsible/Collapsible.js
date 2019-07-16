import React from 'react';
import styled, {css} from 'styled-components';

const StyledHeader = styled.div`
    cursor: pointer;
    border: solid 1px #f2f2f2;
    padding: 15px;
    background-color: #445bb7;
    color: #FFF;
    box-shadow: 0px 10px 14px -7px #030221;

    :hover {
        background-color: #03175b;
        transition: 0.3s;
    }
`;

const StyledContent = styled.div`
    cursor: pointer;
    padding: 10px;
    overflow: auto;
    border-left: solid 1px #f2f2f2;
    border-right: solid 1px #f2f2f2;
    border-bottom: solid 1px #f2f2f2;
    border-radius: 0 0 5px 5px;
    padding: 15px;
    text-align: left;
    background-color: #F8F8F8;
    font-size: 14px;
    animation: slidein 0.7s ease-out;

    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
        background: #03175b; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #030221; 
    }
    @keyframes slidein {
        0%{ opacity:0; }
        100%{ opacity:1; }
    }
`;


class Collapsible extends React.Component {

    state = {
        open: false
    }
    
 
    togglePanel = (e) => {
        this.setState({open: !this.state.open})
    }

        render() {
            return (
            <>
                <StyledHeader onClick={(e)=>this.togglePanel(e)}>
                    {this.props.title}
                </StyledHeader>
                {
                    this.state.open ? (
                        <StyledContent>
                        {this.props.children}
                        </StyledContent>
                ) : null
                }
            </>
        );
    }
}


export default Collapsible;
    