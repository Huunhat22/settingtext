import { Component } from 'react';

class Reset extends Component{
    //tạo function onResetDefault
    onResetDefault = () =>{
        this.props.reciveReset(true);
    }

    render(){
        return(
            <button type="button" className="btn btn-primary" onClick = {() => this.onResetDefault() }>reset</button>
        );
    }
}

export default Reset;