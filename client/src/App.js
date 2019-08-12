import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'normalize.css';

import fred from "./image/fred.jpg"
import emma from "./image/emma.jpg"
import friend from "./image/friend.jpg"
import boy from "./image/boy.jpg"
import girl from "./image/girl.jpg"
import dino from "./image/dino.jpg"

let score = 0;
let topScore = 0;
let answer = false;

const scoreContext = React.createContext({
  score : 0,
  topScore : 0,
  answer : "Waiting"
})

// Component Navbar
class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Click</a>
        <div className="navbar-nav clickAnswer">
          {answer === true ? "Correct Answer!" : "Wrong Answer!"}
        </div>
        <span className="navbar-text">
          Score: {score} | Top Score : {topScore}
        </span>
      </nav>

    )
  }
}

// Component Jumbotron
class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Clicky Game!</h1>
        <h4>Click on an image to earn points, but don't click on any more than once!</h4>
      </div>
    )
  }
}

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickHit : false
    }

    this.checkHit = this.checkHit.bind(this);
  }

  randomHit() {
    if (Math.random() < 0.5) {
      this.setState({clickHit : true});
    }
  }

  checkHit() {
    console.log(this.state.clickHit);
    if (this.state.clickHit) {
      // global variable doesn't work because navbar component will not update
      // when the global variable changes
      score += 1;
      topScore += 1;
      answer = true;
      console.log(score);
    } else {
      answer = false;
    }
  }

  componentDidMount() {
    this.randomHit();
    console.log(this.state.clickHit);
  }

  render() {
    return <img src={this.props.link} alt={this.props.name} onClick={this.checkHit} width="50%" height="80%" />
  }
}

// Component grid
class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Image link={fred} alt="fred"></Image>
          </div>
          <div className="col">
            <Image link={emma} alt="emma"></Image>
          </div>
          <div className="col">
            <Image link={friend} alt="friend"></Image>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Image link={dino} alt="boy"></Image>
          </div>
          <div className="col">
            <Image link={boy} alt="girl"></Image>
          </div>
          <div className="col">
            <Image link={girl} alt="dino"></Image>
          </div>
        </div>
      </div>
    )
  }
}

// Component footer
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="bottom">
          Clicky Game!
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
