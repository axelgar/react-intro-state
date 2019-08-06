import React, { Component } from 'react';
import Number from './Number.js';
import list from './List.js';

class Counter extends Component {
  state = {
    number: 0,
    title: 'This is a counter',
    isNumberShowing: true,
    data: [
      {name: 'Barcelona', population: '1,5 millones'},
      {name: 'Madrid', population: '3,4 millones'},
      {name: 'Sevilla', population: '0.5 millones'},
      {name: 'Moscow', population: '12 millones'},
      {name: 'Dallas', population: '6 millones'}
    ]
  }

  modifyNumber = (modification) => {
    let newNumber = this.state.number;
    this.setState({
    number: newNumber + modification
    }, () => {
      console.log(this.state)
    })
  }

  showTextBasedOnNumber = () => {
    const {number} = this.state;
    if(number > 0 ) {
      return <p>This number is higher than 0</p>
    } else if (number < 0) {
      return <p>This number is lower than 0</p>
    } else {
      return <p>This number is equals to 0</p>
    }
  }

  generateList = () => {
    const listItems = [];
    this.state.data.forEach((city, index) => {
      listItems.push(<li key={index}>
        <p>{city.name}</p>
        <p>{city.population}</p>
      </li>)
    })
    return listItems;
  }

  render() {
    const {title, number, isNumberShowing, data} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {/* {isNumberShowing ? <Number number={number}/> : null} */}
        {isNumberShowing && <Number number={number}/>}
        <button onClick={() => {this.modifyNumber(1)}}>Sum</button>
        <button onClick={() => {this.modifyNumber(-1)}}>Subtract</button>
        {this.showTextBasedOnNumber()}
        <list cities={data}/>
      </div>
    )
  }
}

export default Counter;
