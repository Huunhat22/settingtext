import React, {Component} from 'react';

class Sizesetting extends Component{
    render(){
        return(
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Size : 15px</h3>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-success" >Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success" >Tăng</button>
                </div>
            </div>
        );
    }
}

export default Sizesetting;