import React ,{Component} from 'react';

class From extends Component{

    //tạo State cho from
    constructor(props){
        super(props);
        this.state={
            Username:'',
            Password:'',
            Textarea:''
        };
    }

    //Function onHandleChange
    onHandleChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
           [name] : value
        });
    }

    //Function onHandleSubmit
    onHandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div  className='row mt-5 mb-5'>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="card">
                            <div className="card-header">
                                <h3>Create Component With From</h3>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label className="form-label">User Name</label>
                                    <input type="text" className="form-control" name="Username" placeholder="Please input user name" onChange={this.onHandleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">PassWord</label>
                                    <input className="form-control" name="Password" placeholder="Please input Password"  onChange={this.onHandleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Example textarea</label>
                                    <textarea className="form-control" name="Textarea" rows="3" onChange={this.onHandleChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Sex</label>
                                    <select className="form-select">
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Language</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label">
                                            Vietnamese
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label">
                                            English
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=""/>
                                    <label className="form-check-label">
                                        Term and Service
                                    </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-outline-success">Submit</button> &nbsp;
                                    <button type="reset" className="btn btn-outline-primary">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default From;