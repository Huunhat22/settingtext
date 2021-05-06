import React ,{Component} from 'react';

class Result extends Component{
    setStyle = ()=>{
        return{
            color : this.props.colorRecive,
            borderColor : this.props.colorRecive,
            fontSize : this.props.fontSize
        };
    }

    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>Color : {this.props.colorRecive} - Fontsize : {this.props.fontSize}</p>
              <p className="border p-2" style = {this.setStyle()}>đây là nội dung sẽ bị thay đổi</p>
            </div>
        );
    }
}

export default Result;