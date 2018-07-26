import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Jobdetails from './components/Jobdetails'
import Inputform from './components/Inputform'
import Footer from './components/Footer'

const dinoData = './listing.json'

class App extends Component {
  state = {
    application: [],
    response: ['Your application was submitted!']
  }

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    return fetch(dinoData)
      .then(response => response.json())
      .then(criteria => this.setState({ criteria }));
  }

  onClick(e) {
    e.preventDefault()
    this.setState({
      response: 'hi'
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id='job-details'>
            <h2>Job Details</h2>
            <Jobdetails criteria={this.state.criteria} />
          </section>
          <Inputform />
          <p>{this.onClick}</p>
          <button type='submit'>Show Preview</button>
          <section />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
