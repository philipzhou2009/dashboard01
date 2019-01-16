
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './RadioSwitchTypeI.css';

class RadioSwitchTypeI extends React.Component {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false,
  };

  render() {
    const {
      name,
      showValidationMessage,
      showValidationButton,
    } = this.state;
    return (
      <Grid>
        <Button onClick={() => {
          this.setState(state => ({
            showValidationButton: false,
            showValidationMessage: true,
          }));
        }}> Validate form </Button>
        <div className="rs-bg">
          <span className="rs-bg-l">D</span>
          <span className="rs-bg-r">AAAAAA</span>
          <CSSTransition
            in={showValidationMessage}
            timeout={1000}
            classNames="rs"
            unmountOnExit >
            <div className="rs-sw"><span className="rs-sw-label">XXXX</span></div>
          </CSSTransition>
        </div>
      </Grid>
    );
  }
}
export default RadioSwitchTypeI;
