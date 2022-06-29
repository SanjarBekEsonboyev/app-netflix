import React, {Component} from 'react';
import Header from "../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Fotter from "../components/Fotter";
import Main from "../components/Main";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: false
    }
  }

  render() {


    const changeIcon = () => {
      this.setState({
        icon: !this.state.icon
      })
    }
        return (
            <>
             <Header/>

             <Main/>

               <div>
              <div className="container-fluid pb-5">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-8 offset-2">
                        <h1 className="text-center align-items-center text-white mt-5" style={{fontSize: "60px", lineHeight:"3"}}>Frequently Asked Questions</h1>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>What is Netflix?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                              anime, documentaries, and more on thousands of internet-connected devices.
                              <br/>
                              <br/>
                              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.
                              There's always something new to discover and new TV shows and movies are added every week!
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <br/>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>How much does Netflix cost?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                              fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <br/>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>Where can I watch?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from
                              your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs,
                              smartphones, tablets, streaming media players and game consoles.
                              <br/>
                              <br/>
                              You can also download your favorite shows with the iOS, Android, or Windows 10 app.
                              Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <br/>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>How dou I cancel?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel
                              your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <br/>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>What can I watch on Netflix?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                              Netflix originals, and more. Watch as much as you want, anytime you want.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <br/>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>Is Netflix good for kids?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly
                              TV shows and movies in their own space.
                              <br/>
                              <br/>
                              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of
                              content kids can watch and block specific titles you don’t want kids to see.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <br/>
                        <Accordion style={{backgroundColor: "#262626"}}>
                          <AccordionSummary
                              expandIcon={!this.state.icon ? <AddIcon  sx={{color: "#fff"}}/> : <CloseIcon  sx={{color: "#fff"}}/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              onClick={changeIcon}
                              color="#000"
                          >
                            <Typography color="white" style={{fontSize: "30px", marginLeft: "10px"}}>Why am I seeing this language?</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography className="text-white" style={{fontSize: "25px",marginLeft: "8px",marginRight: "10px"}}>
                              Your browser preferences determine the language shown here.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                        <h3 className="text-white text-center mt-5">Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="futer text-center">

                          <button type="button" className="btn btn-danger sign-up">Get Started ></button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                 <div className="div bg-dark w-100" style={{height:"7px"}}></div>
               </div>


                <Fotter/>
            </>
        );
    }
}

export default Home;