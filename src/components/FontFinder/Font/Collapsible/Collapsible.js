import React from 'react';
import styled, {css} from 'styled-components';

const StyledHeader = styled.div`
    cursor: pointer;
    border: solid 1px #f2f2f2;
    padding: 15px;
    background-color: #0089CC;
    color: #FFF;
    font-family: verdana;
    box-shadow: 0px 10px 14px -7px #276873;



`;

const StyledContent = styled.div`
    cursor: pointer;
    border-left: solid 1px #f2f2f2;
    border-right: solid 1px #f2f2f2;
    border-bottom: solid 1px #f2f2f2;
    border-radius: 0 0 5px 5px;
    padding: 15px;
    font-family: verdana;
    font-size: 14px;
    
 
    animation: slidein 0.7s ease-out;
  
  
  
  @keyframes slidein{
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
    return (<div>
    <StyledHeader onClick={(e)=>this.togglePanel(e)} >
    {this.props.title}
    </StyledHeader>
    {this.state.open ? (
    <StyledContent>
    {this.props.children}
    </StyledContent>
    ) : null}
    </div>);
    }
}


export default Collapsible;
    