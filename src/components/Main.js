import React, {Component} from 'react';
import '../sass/header.scss';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"black"}}>
                <div className="div bg-dark w-100" style={{height:"7px"}}></div>


                <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 mt-4">
                                    <h1>Enjoy on your TV.</h1>
                                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                                </div>
                                <div className="col-6 mt-4">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                                    <video>
                                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>
                                    </video>
                                </div>

                            </div>
                        </div>
                    </div>
                <div className="div m-0 p-0 bg-dark w-100" style={{height:"7px"}}></div>

                <div className="end">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 mt-4">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
                                </div>
                                <div className="col-6 mt-4">
                                    <h1>Download your shows to watch offline.</h1>
                                    <p>Save your favorites easily and always have something to watch.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                <div className="div bg-dark w-100" style={{height:"7px"}}></div>

                   <div className="verb">
                       <div className="container">
                           <div className="row">
                               <div className="col-6 mt-4">
                                   <h1>Watch everywhere.</h1>
                                   <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                               </div>
                               <div className="col-6 mt-4">
                                   <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                                   <video>
                                       <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>
                                   </video>

                               </div>
                           </div>
                       </div>
                   </div>

                <div className="div bg-dark w-100" style={{height:"7px"}}></div>


                    <div className="end">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 mt-4">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" alt=""/>
                                </div>
                                <div className="col-6 mt-4">
                                    <h1>Download your shows to watch offline.</h1>
                                    <p>Save your favorites easily and always have something to watch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="div bg-dark w-100" style={{height:"7px"}}></div>
            </div>



        );
    }
}

export default Main;