import { Component } from 'react';
import './App.css';
import Reset from './components/Reset';
import Colorpicker from './components/Colorpicker';
import Result from './components/Result';
import Sizesetting from './components/Sizesetting';

class App extends Component {

  //Tạo State để truyền vào component
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontsize : 15
    };
  }

  onSetColor = (param) =>{
    // console.log(param);
    this.setState({
      color : param
    });
  }

  render(){
    return (
      <div className='container'>
          <div className='row mt-5'>
            <Colorpicker colorRecive = {this.state.color} onReciveColor = {this.onSetColor}></Colorpicker>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Sizesetting></Sizesetting>
              <Reset></Reset>
            </div>
            <Result colorRecive = {this.state.color}></Result>
          </div>
        </div>
    );
  }
}

export default App;
