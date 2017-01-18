import React, { Component } from 'react';
import { Link } from 'react-router';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
//import styles from './styles.css';


@inject("store") @observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    this.store.startTimer();
  }

  componentWillUnmount() {
    this.store.stopTimer();
  }

  render() {
    return (
      <div>
        <div>Welcome to a basic sample app with an arbitrary timer.</div>

        <h1>
          <span>Timer:</span>
          <span> {this.store.counter}</span>
        </h1>
        <button
            onClick={this.store.reset}

        >Reset</button>
        <button
            onClick={this.store.decrement}

        >-10</button>
        <button
            onClick={this.store.increment}

        >+10</button>
      </div>
      
    );
  }
}

export store from './store';
