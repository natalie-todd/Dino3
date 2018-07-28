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
    showMessage: false,
  }

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    return fetch(dinoData)
      .then(response => response.json())
      .then(criteria => this.setState({ criteria }));
  }

  toggleVisibility(preview) {
    if (this.state.showMessage === preview) {
      preview = false;
    }
    this.setState({ showSkills: preview })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id='job-details'>
            <h2>Job Details</h2>
            <Jobdetails criteria={this.state.criteria} 
            showMessage={this.state.showMessage}
            toggleVisibility={this.toggleVisibility}/>
          </section>
          <Inputform />
         
          {/* <Preview application={this.state.application}/> */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
