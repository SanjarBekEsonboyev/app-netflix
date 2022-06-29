import React, {Component} from 'react';
import '../sass/header.scss';

class Header extends Component {
    render() {
        return (
            <>
                <section className="background_img">
                    <div className="back_opacity"></div>
                    <nav className="navbar navbar-expand-md">
                        <div className="navbar_row">
                            <a href="#" className="navbar-brand">
                                <img src="/images/logo.svg" alt="Logo"/>
                            </a>

                            <span className="d-flex">
                                <select className="form-control bg-transparent rounded-0 text-white">
                                    <option>English</option>
                                    <option>Russia</option>
                                </select>

                                <button type="button" className="btn btn-danger ml-4">Sign Out</button>
                            </span>
                        </div>
                    </nav>



                    <span className="text-center text">
                            <h4>Welcome back!</h4>
                    </span>
                    <span className="text-center text">
                        <h1>Unlimited movies, TV <br/> shows, and more.</h1>
                    </span>
                    <span className="text-center text">
                        <h4>Watch anywhere. Cancel anytime.</h4>
                    </span>
                    <span className="text-center text">
                        <button type="button" className="btn btn-danger sign-up">Finish Sign Up ></button>
                    </span>
                </section>
            </>
        );
    }
}

export default Header;