import React from "react";
import guardlogo from './static/Guardlogosvg.svg';
import './static/Signup.css';
import {showLoading, removeLoading} from './index';
import { FileUploader } from 'react-drag-drop-files';
import anchor from './static/anchor.png'

const fileTypes = ["JPG", "PNG", "GIF"];

class Signup extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        }
    }    

    handleFileUpload = (file) => {
        this.setState({file: file}) 
    }

    componentDidMount() {
        removeLoading()
    }

    render() {    
    return (
      <div className="getstarted">
        <header className="d-flex flex-row align-items-center">
            <img src={guardlogo} className="logo" alt='logo' />
        </header>
        <main className="d-flex signup-main justify-content-between flex-wrap">
            <aside className="text-aside">
                <p className="aside-header">Get Started</p>
                <p className="aside-content">Guardly has simplified how security <br/>
                    agencies can obtain unique identification <br/>
                    numbers for their agents.</p>
            </aside>
            <aside className="form-aside">
                <form className="form px-5">
                    <div className="row">
                        <div className="col px-1">
                            <label for="first_name">First Name</label>
                            <input id="first_name" type="text" className="form-control" placeholder="Thomas" />
                        </div>
                        <div className="col px-1">
                            <label for="first_name">Last Name</label>    
                            <input id="last_name" type="text" className="form-control" placeholder="Cruise" />
                        </div>
                    </div>
                    <label for="DOB" className="ml-10 mt20">Date of </label>            
                    <div className="row" id="DOB">
                        <div className="col px-1">
                            <input type="text" className="form-control" placeholder="Day" />
                        </div>  
                        <div className="col px-1">
                            <input type="text" className="form-control" placeholder="Month" />
                        </div>    
                        <div className="col px-1">
                            <input type="text" className="form-control" placeholder="Year" />
                        </div>
                    </div>
                    <div className="form-group mb0">
                        <label for='nin' className="ml-10 mt20">NIN</label>
                        <input type="text" className="ml-10 form-control single-input" id="nin"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='homeadd' className="ml-10 mt20">Home Address</label>
                        <input type="text" id="homeadd" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='eduqua' className="ml-10 mt20">Educational Qualification</label>
                        <input type="text" id="eduqua" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='lastschat' className="ml-10 mt20">Last School Attended</label>
                        <input type="text" id="lastschat" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='motmainam' className="ml-10 mt20">Mother's Maiden Name</label>
                        <input type="text" id="motmainam" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='lasplaofwor' className="ml-10 mt20">Last Place of Work</label>
                        <input type="text" id="lasplawor" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='nexofkin' className="ml-10 mt20">Next of Kin</label>
                        <input type="text" id="nexofkin" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='mobnum' className="ml-10 mt20">Mobile Number</label>
                        <input type="text" id="mobnum" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='staofori' className="ml-10 mt20">State of Origin</label>
                        <input type="text" id="staofori" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='locgovofori' className="ml-10 mt20">Local Government of Origin</label>
                        <input type="text" id="locgovofori" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='plaofbir' className="ml-10 mt20">Place of Birth</label>
                        <input type="text" id="plaofbir" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='email' className="ml-10 mt20">Email Address</label>
                        <input type="email" id="email" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0">
                        <label for='height' className="ml-10 mt20">Height</label>
                        <input type="text" id="height" className="ml-10 form-control single-input"/>
                    </div>
                    <div className="form-group mb0" id="file-input-group">
                        <label for='uplimg' className="ml-10 mt20">Upload Image</label><br/>
                        <div className='ml-10 single-input image-input form-control'>
                            <FileUploader handleChange={this.handleFileUpload} name="file"
                            types={fileTypes} children={<p><img src={anchor}/>Drag and drop or <span className="bluespan1"><u>browse</u></span></p>}/>
                        </div>
                    </div>
                    <p className="ml-10 mt15 f14 mb0 termsp">By clicking the button below, you agree to Guardly’s <span className='bluespan1'>terms of service.</span></p>
                    <button className="mt20 ml-10 btnrequniid">Request Unique ID</button>
                </form>
            </aside>
        </main>
      </div>
    )
}    
}
  
export default Signup