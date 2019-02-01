import React, { Component } from 'react';
import * as math from 'mathjs';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

class App extends Component {
  state = {
    currentNumber: "0",
    operatorFlag: false,
    decimalFlag: false,
    evaluated: false
  }


  clickHandler = (buttonName) => {
    let currentNumber = this.state.currentNumber
    let operatorFlag = this.state.operatorFlag
    switch(true){
        case buttonName === "0" ||
             buttonName === "1" ||
             buttonName === "2" ||
             buttonName === "3" ||
             buttonName === "4" ||
             buttonName === "5" ||
             buttonName === "6" ||
             buttonName === "7" ||
             buttonName === "8" ||
             buttonName === "9" :
        
        if(this.state.currentNumber!=="0" && !this.state.evaluated){
          currentNumber += buttonName;
          operatorFlag = false;
        } else {
          currentNumber = buttonName;
          this.setState({ evaluated: false });
          }        
        break
        case buttonName === "+" ||
             buttonName === "-" ||
             buttonName === "*" ||
             buttonName === "/" :
        if(!this.state.operatorFlag) {
          currentNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag:false });
          this.setState({ evaluated: false });
        } else{
          const newNumber = currentNumber.slice(0, currentNumber.length-1);
          currentNumber = newNumber;
          currentNumber += buttonName;
        }
        break
        case buttonName === "C":
          currentNumber = "0";
          operatorFlag = false;
          this.setState({ decimalFlag:false });
        break
        case buttonName === "=":
          this.setState({ evaluated: true });
          currentNumber = math.eval(currentNumber);
          operatorFlag = false;
          this.setState({ decimalFlag: true });          
        break
        case buttonName === ".":
          if(!this.state.decimalFlag){
            currentNumber += ".";
            this.setState({ decimalFlag:true });
          }
        break
        default:
        currentNumber += buttonName;
        operatorFlag = false;
    }
    this.setState({ operatorFlag });
    this.setState({ currentNumber });
  } 

  render() {
    return (
      <div className="App">
        <div className="calcWrapper">
          <Display>{this.state.currentNumber}</Display>
          <div className="row">
            <Button id="seven" name="7" clickHandler={this.clickHandler} />
            <Button id="eight" name="8" clickHandler={this.clickHandler} />
            <Button id="nine" name="9" clickHandler={this.clickHandler} />
            <Button id="divide" name="/" clickHandler={this.clickHandler} />
          </div>
          <div className="row">
            <Button id="four" name="4" clickHandler={this.clickHandler} />
            <Button id="five" name="5" clickHandler={this.clickHandler} />
            <Button id="six" name="6" clickHandler={this.clickHandler} />
            <Button id="multiply" name="*" clickHandler={this.clickHandler} />
          </div>
          <div className="row">
            <Button id="one" name="1" clickHandler={this.clickHandler} />
            <Button id="two" name="2" clickHandler={this.clickHandler} />
            <Button id="three" name="3" clickHandler={this.clickHandler} />
            <Button id="add" name="+" clickHandler={this.clickHandler} />
          </div>
          <div className="row">
            <Button id="decimal" name="." clickHandler={this.clickHandler} />
            <Button id="zero" name="0" clickHandler={this.clickHandler} />
            <Button id="equals" name="=" clickHandler={this.clickHandler} />
            <Button id="subtract" name="-" clickHandler={this.clickHandler} />
          </div>
          <div className="row">
            <Button id="clear" name="C" clickHandler={this.clickHandler} />
          </div>              
        </div>
      </div>
    );
  }
}

export default App;
