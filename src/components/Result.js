import React ,{Component} from 'react';

class Result extends Component{
    render(){
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>Color : red - Fontsize : 15px</p>
              <p className="border border-danger p-2">đây là nội dung sẽ bị thay đổi</p>
            </div>
        );
    }
}

export default Result;