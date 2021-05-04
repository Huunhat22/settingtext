import { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className='container'>
          <div className='row mt-5'>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card mb-3">
                <div className="card-header">
                  <h3>Color Picker</h3>
                </div>
                <div className="card-body">
  
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card mb-3">
                <div className="card-header">
                  <h3>Size : 15px</h3>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-success" >Giảm</button>&nbsp;
                  <button type="button" className="btn btn-success" >Tăng</button>
                </div>
              </div>
              <button type="button" className="btn btn-primary" >reset</button>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>Color : red - Fontsize : 15px</p>
              <p className="border border-danger p-2">đây là nội dung sẽ bị thay đổi</p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
