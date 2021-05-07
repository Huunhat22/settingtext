import React ,{Component} from 'react';

class From extends Component{
    render(){
        return(
            <div  className='row mt-5'>
                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Create Component With From</h3>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input class="form-control"  placeholder="Please input user name"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">PassWord</label>
                                <input class="form-control"  placeholder="Please input Password"/>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-outline-success">Submit</button> &nbsp;
                                <button type="reset" className="btn btn-outline-primary">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default From;