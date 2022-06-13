import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './static/index.css';
import './static/bootstrap.min.css';
import guardlogo from './static/Guardlogosvg.svg';
import ellipse34 from './static/Ellipse 34.png';
import ellipse35 from './static/Ellipse 35.png';
import ellipse36 from './static/Ellipse 36.png';
import ellipse367 from './static/Ellipse 367 1.png';
import ellipse3676 from './static/Ellipse 3676 1.png';
import ellipse368 from './static/Ellipse 368.png';
import { Transition } from 'react-transition-group';
import $ from 'jquery';

const transitions = {
  entering: {
    display: 'block'
  },
  entered: {
    opacity: 1,
    display: 'block'
  },
  exiting: {
    opacity: 0.1,
    display: 'none'
  },
  exited: {
    opacity: '0',
    display: 'none'
  }
};

function Signup() {
  return (
    <div>Hello Motherfucker</div>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pic1TransitionState: true,
      pic2TransitionState: false,
    }
  }

  alternateAsidePic = () => {
    this.setState({pic1TransitionState: !this.state.pic1TransitionState})
    this.setState({pic2TransitionState: !this.state.pic2TransitionState})
  }

  componentDidMount() {
    setInterval(this.alternateAsidePic, 5000)
  }

  componentWillUnmount() {
    clearInterval()
  }  

  render() {
      return (
        <Router>
          <div> 
            <header className="d-flex flex-row align-items-center">
              <img src={guardlogo} className="logo" alt='logo' />
              <div className="header-nav d-flex flex-row align-items-center">
                <div className="home">
                  <span>Home</span>                
                </div>
                <div className="aboutus">
                  About us
                </div>
                <div className="services">
                  Services
                </div>
                <div className="contact">
                  Contact
                </div>
              </div>
              <button className="signin">
                Sign in
              </button>
              <button className="uid">
                Request Unique ID
              </button>
            </header>
            <main>
              <section className='d-flex flex-row'>
                <div>
                  <p className="section-header">
                    A better way to manage
                    your security needs  
                  </p>
                  <p className="section-content">
                    Guardly has simplified how 
                    security agencies can obtain unique identification 
                    numbers for their agents.
                  </p>
                  <div className='d-flex align-items-center 
                    justify-content-between getidbtnwrapper'>
                    <Link to="/Signup">
                      <button className="getid align-self-end" onClick={this.getStarted}>
                        Get Unique ID
                      </button>
                    </Link>  
                    <div className='border rounded-circle circle circle1'></div>
                    <div className='border rounded-circle circle circle2'></div>
                  </div>
                </div>  

                <div className='aside'>  
                  <img src={ellipse35} alt="img35" className="aside-img aside-img2" />
                  <img src={ellipse36} alt="img36" className="aside-img aside-img3" />
                  <img src={ellipse368} alt="img368" className="aside-img aside-img4" />

                  <Transition in={this.state.pic1TransitionState} timeout={10}>
                  {state => (
                    <img src={ellipse367} alt="img1" className='aside-img aside-img5'
                    style={{
                      transition: 'all .4s', 
                      opacity:0,
                      ...transitions[state]
                    }}
                    />
                  )}
                  </Transition>
                  <Transition in={this.state.pic2TransitionState} timeout={10}>
                  {state => (
                    <img src={ellipse3676} alt="img2" className='aside-img aside-img6'
                    style={{
                      transition: 'all .4s',
                      opacity:0,
                      ...transitions[state]
                    }}
                    />
                  )}
                  </Transition>
                </div>
              </section>
            </main>
            <footer></footer>
            <Routes>
              <Route exact path='/signup' element={<Signup />}></Route>
            </Routes>
          </div>
        </Router>
      )
  }
}

const root = React.ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
