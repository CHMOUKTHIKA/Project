import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>

                    <div className='m-2' style={{color:"white"}}>
                        Developed by:<br></br>
                        Chakka Moukthika, Jirra Sri Vani, Thagili Aishwarya<br></br>
                    </div>
                    
                </div>

            </footer>
        );
    }
}

export default Footer;