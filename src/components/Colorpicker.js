import React, {Component} from 'react';

class Colorpicker extends Component{

    //Tạo State
    constructor(props){
        super(props);
        this.state = {
            Colors : ['red','green','blue','gray'],
        };
    }

    // hàm set color
    showColor(color){
        // console.log(this.props.color);
        return{
            background : color
        };
    }

    setActiveColor = (color) => {
        // console.log(color);
        this.props.onReciveColor(color);
    }

    render(){
        //get các colors trong state, và gọi hàm showColor
        var elmcolors = this.state.Colors.map((color,index) =>{
            return  <span 
                        key={index}
                        style={this.showColor(color)}
                        className = {this.props.colorRecive === color ? 'active' : ''}
                        onClick ={ ()=> this.setActiveColor(color) }
                    >
                    </span>
        });

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card mb-3">
                    <div className="card-header">
                    <h3>Color Picker</h3>
                    </div>
                    <div className="card-body">
                        {elmcolors}
                    </div>
                </div>
            </div>
        );
    }
}

export default Colorpicker;