import React, {Component} from 'react';

class Sizesetting extends Component{

    //function onChangeSize
    onChangeSize =(value) =>{
        this.props.reciveChangeSize(value);
    }

    render(){
        return(
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Size : {this.props.fontSize}</h3>
                </div>
                <div className="card-body">
                    <button type="button" className="btn btn-success" onClick = {() =>this.onChangeSize(-2) }>Giảm</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick = {() =>this.onChangeSize(+2) }>Tăng</button>
                </div>
            </div>
        );
    }
}

export default Sizesetting;