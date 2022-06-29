import React, {Component} from 'react';
import "../sass/footter.scss"

class Fotter extends Component {
    render() {
        return (
            <>
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-9 offset-2 mt-5">
                           <div className="row">
                               <div className="col-12">
                                   <a href="#">Questions? Contact us.</a>
                               </div>
                               <div className="col-3">
                                   <ul className="list-unstyled">
                                       <li className="item-link"><a href="#">FAQ</a></li>
                                       <li className="item-link"><a href="#">Investor Relations</a></li>
                                       <li className="item-link"><a href="#">Privacy</a></li>
                                       <li className="item-link"><a href="#">Speed Test</a></li>
                                   </ul>
                               </div>
                               <div className="col-3">
                                   <ul className="list-unstyled">
                                       <li className="item-link"><a href="#">Help Center</a></li>
                                       <li className="item-link"><a href="#">Jobs</a></li>
                                       <li className="item-link"><a href="#">Cookie Preferences</a></li>
                                       <li className="item-link"><a href="#">Legal Notices</a></li>
                                   </ul>
                               </div>
                               <div className="col-3">
                                   <ul className="list-unstyled">
                                       <li className="item-link"><a href="#">Account</a></li>
                                       <li className="item-link"><a href="#">Ways to Watch</a></li>
                                       <li className="item-link"><a href="#">Corporate Information</a></li>
                                       <li className="item-link"><a href="#">Only on Netflix</a></li>
                                   </ul>
                               </div>
                               <div className="col-3">
                                   <ul className="list-unstyled">
                                       <li className="item-link"><a href="#">Media Center</a></li>
                                       <li className="item-link"><a href="#">Terms of Use</a></li>
                                       <li className="item-link"><a href="#">Contact Us</a></li>
                                   </ul>
                               </div>
                               <div className="col-2">
                                   <select className="form-control bg-transparent rounded-0">
                                       <option>English</option>
                                       <option>Russia</option>
                                   </select>
                               </div>

                               <div className="col-12">
                                   <p>Netflix Uzbekistan</p>
                               </div>
                           </div>
                           
                      </div>
                   </div>
               </div>
            </>
        );
    }
}

export default Fotter;