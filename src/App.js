import { Component } from 'react';
import './App.css';
import Reset from './components/Reset';
import Colorpicker from './components/Colorpicker';
import Result from './components/Result';
import Sizesetting from './components/Sizesetting';
import From from './components/From';

class App extends Component {

  //Tạo State để truyền vào component
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontsize : 14
    };
  }

  //function set color 
  onSetColor = (param) =>{
    // console.log(param);
    this.setState({
      color : param
    });
  }

  //function set size when we action click button Giam -Tang
  setSize = (paramSize) =>{
    // console.log(paramSize);
    this.setState({
      fontsize : (this.state.fontsize + paramSize >= 8 && this.state.fontsize + paramSize <= 36) ? this.state.fontsize + paramSize :this.state.fontsize
    });
  }

  //function resetValue khi co su kien click vao button Reset
  resetValue = (paramflag) =>{
    if (paramflag) {
      this.setState({
        color : 'red',
        fontsize : 14
      });
    }
  }

  render(){
    return (
      <div className='container'>
          <div className='row mt-5'>
            <Colorpicker colorRecive = {this.state.color} onReciveColor = {this.onSetColor}></Colorpicker>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Sizesetting fontSize = {this.state.fontsize} reciveChangeSize = {this.setSize}></Sizesetting>
              <Reset reciveReset = {this.resetValue}></Reset>
            </div>
            <Result colorRecive = {this.state.color} fontSize = {this.state.fontsize}></Result>
          </div>
          <From></From>
        </div>
    );
  }
}

export default App;
