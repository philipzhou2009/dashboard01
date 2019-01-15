import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
} from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

const propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  invert: PropTypes.bool,
};

const defaultProps = {
  header: '87.500',
  icon: 'icon-people',
  color: 'info',
  value: '25',
  children: 'Visitors',
  invert: false,
};

class PipelineCard extends Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: 'white', status: 'unknown' };
  }

  async fetchCodeBuildResult() {
    const result = await fetch('http://localhost:3001/codebuild')
      .then(res => res.json());

    console.log(result);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.fetchCodeBuildResult();

    // fetch("https://localhost:3001/codebuild")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.items
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }

  // updateStatus(s) {

  // }

  render() {
    const {
      className, cssModule, header, icon, value, children, invert, ...attributes
    } = this.props;

    const card = { style: '', bgColor: '', icon };

    // if (invert) {
    //   card.style = 'text-white';
    //   card.bgColor = 'bg-' + color;
    // }


    // switch(this.state.status) {
    //   case 'unknown':
    //   this.s
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //     // code block
    // }


    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);

    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div className="h1 text-muted text-right mb-2">
            <i className={card.icon} />
          </div>
          <div className="h4 mb-0">{header}</div>
          <small className="text-muted text-uppercase font-weight-bold">{children}</small>
        </CardBody>
      </Card>
    );
  }
}

PipelineCard.propTypes = propTypes;
PipelineCard.defaultProps = defaultProps;

export default PipelineCard;
