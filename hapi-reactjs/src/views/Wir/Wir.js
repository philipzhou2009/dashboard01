import React, { Component } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import { Widget04 } from '../Components';

class WirMadDash extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <Col sm="6" md="6">
            <Widget04 icon="icon-speedometer" color="success" header="Frontend" value="25" invert>Frontend</Widget04>
          </Col>
          <Col sm="6" md="6">
            <Widget04 icon="icon-speedometer" color="success" header="Backend" value="25" invert>Backend</Widget04>
          </Col>

        </Row>

      </div>
    );
  }
}

export default WirMadDash;
