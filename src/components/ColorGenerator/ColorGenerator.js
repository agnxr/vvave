import React from 'react';
import Button from './Button/Button';
import styled, {css} from 'styled-components';

const StyledColourName = styled.div`
  font-size: 40px;
  padding: 30px;
  margin: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  width: 40vw;
`;

const StyledColour = styled.div`
  width: 40vw;
  height: 300;
  width: 300;
`;

class ColorGenerator extends React.Component {
    state = { 
        color: [153, 51, 255],
        bg: '#445bb7',
    }

    handleClick = () => {
        this.setState({ 
            color: this.chooseColor(),
            bg: this.formatColor(this.state.color)
        });
    }

    formatColor(rgbArray) {
      return 'rgb(' + rgbArray.join(', ') + ')';
    }

    applyColor() {
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
        <>
          <Button refreshFn={this.handleClick} />
          <StyledColourName>
            <p>
              {this.formatColor(this.state.color)}
            </p>
          </StyledColourName>
          <StyledColour style={{height:200, backgroundColor:`${this.state.bg}`}} />
        </>
      );
    }
}

export default ColorGenerator;