import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Loader/Loader';

import { Button } from './Button/Button';
import styled, {css} from 'styled-components';

const StyledListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;


const StyledDiv = styled.div`
  border: 3px solid blue;
  height: 300;
  width: 300;


    ${({active}) => (
        active && css `
        border: 3px solid #030221;
        `
    )}
`;

class ColorGenerator extends React.Component {
    state = { 
        color: [153, 51, 255],
        bg: 'green',
    }

    myRef = React.createRef();

    handleClick = () => {
        this.setState({ 
            color: this.chooseColor(),
            bg: this.formatColor(this.state.color)
        });
    }

  componentDidMount() {
    this.applyColor();
  }

 

  formatColor(rgbArray) {
    return 'rgb(' + rgbArray.join(', ') + ')';
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
  
    //this.myRef.style.background = color;
    this.setState({ 
        bg: this.formatColor(this.state.color)
    });
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }


  render() {
    return (
      <div>
        <h1>
          {this.formatColor(this.state.color)}
        </h1>
        <button 
          onClick={this.handleClick} 
        >testuuuuj</button>
        <StyledDiv style={{height:200, backgroundColor:`${this.state.bg}`}}>
            fefefejhf
            </StyledDiv>
      </div>
    );
  }
}

export default ColorGenerator;