import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from 'reactstrap';
import { PipelineCard, PipelineHistory } from '../Components';

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
            <Card>
              <CardHeader>FRONTEND</CardHeader>
              <CardBody>
                <Row>
                  <Col sm="6" md="6">
                    <PipelineCard icon="fa fa-gears" color="success" header="Pipeline" value="25" invert>success</PipelineCard>
                  </Col>
                  <Col sm="6" md="6">
                    <PipelineHistory icon="fa fa-gears" color="light" header="Pipeline History" value="25" invert>success</PipelineHistory>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>End</CardFooter>
            </Card>
          </Col>

          <Col sm="6" md="6">
            <Card>
              <CardHeader>BACKEND</CardHeader>
              <CardBody>
                {/* <PipelineCard icon="fa fa-gears" color="success" header=" Pipeline" value="25" invert>success</PipelineCard> */}
              </CardBody>
              <CardFooter>End</CardFooter>
            </Card>
          </Col>

        </Row>

      </div>
    );
  }
}

export default WirMadDash;
