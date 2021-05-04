import React, {Component} from 'react';

class Colorpicker extends Component{
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">
                    <h3>Color Picker</h3>
                    </div>
                    <div className="card-body">
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Colorpicker;