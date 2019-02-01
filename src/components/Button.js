import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    runParentHandleClick = () => {
        this.props.clickHandler(this.props.name);
      }

    render () {
        return (
            <button id={this.props.id} onClick={this.runParentHandleClick}>{this.props.name}</button>
        );
    }
}

export default Button;