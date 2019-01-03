import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'typed.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faRedoAlt)
library.add(faPlay)
library.add(faStop)

class App extends Component {
  constructor() {
    super()

    this.state = {
      toggleButton: 'stop'
    }
  }

  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: [
        'Hola.',
        'On October 23, 2018, a girl named Camila liked a guy named \'Andrew\' back on OkCupid.',
        '\'Andrew\', who was really Andres, began to talk to her.',
        'Camila was from Colombia, where she worked in the clinical field. ^650Right now, however, she was in Alexandria, on a journey to explore new places and learn a new language.',
        'Luckily, she agreed to a request for a date on November 3, 2018. ^650Andres would pick her up in his new car. ^850That he stalled twice in one block after seeing her.',
        'Cami, I hope you\'ve enjoyed this little website that I made for you so far.',
        'You have influenced me in so many positive ways. ^650You\'re smart, beautiful, and kind. We have many interesting conversations. ^650You bring me peace.',
        'I\'m going to have my family over this Friday. ^650My aunts, cousins, brothers, and mom will be there. ^650I want you to be there too.',
        'But there\'s a <em>small</em> problem. ^650I don\'t want to introduce you as Camila.',
        'I\'d like to introduce you as my girlfriend, Camila.',
        'Cami Moran, will you be my girlfriend?'
      ],
      typeSpeed: 60,
      backSpeed: 10,
      backDelay: 3000,
      onComplete: () => this.completeHandler()
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  completeHandler() {
    this.setState({toggleButton: ''})
  }

  resetHandler() {
    this.typed.reset()

    if (this.state.toggleButton === 'start') {
      this.setState({toggleButton: 'stop'})
    }
  }

  togglePlay() {
    if (this.state.toggleButton === 'stop') {
      this.typed.stop()

      this.setState({toggleButton: 'play'})
    } 
    else {
      this.typed.start()

      this.setState({toggleButton: 'stop'})
    }
  }

  render() {
    let button;

    if (this.state.toggleButton) {
      button = <FontAwesomeIcon className="control" 
                                onClick={() => this.togglePlay()} 
                                icon={this.state.toggleButton} 
                />
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre-wrap' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
          <div className="control-container">
            {button}
           
            <FontAwesomeIcon className="control" 
                             onClick={() => this.resetHandler()} 
                             icon="redo-alt" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
