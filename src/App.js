import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Jobdetails from './components/Jobdetails'
import Inputform from './components/Inputform'
import Footer from './components/Footer'
import Preview from './components/Preview'

const dinoData = './listing.json'

class App extends Component {
  state = {
    criteria: [],
    application: {},
    showMessage: ''
  }

  componentDidMount() {
    this.getJob();
  }

  getJob = () => {
    return fetch(dinoData)
      .then(response => response.json())
      .then(criteria => this.setState({ criteria }));
  }

  toggleVisibility = (event) => {
    const application = this.state.application;
    application[event.target.name] = event.target.value;
    this.setState({ application: application, message: null })
  }

  submit = event => {
    event.preventDefault();
    if(!this.state.application.application) {
      this.setState({ message: "Please enter your application!" })
    } else {
      this.setState({
        application: {},
        message: 'Your application was submitted!'
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <section id='job-details'>
            <h2>Job Details</h2>
            <Jobdetails criteria={this.state.criteria}
              showMessage={this.state.showMessage}
              toggleVisibility={this.toggleVisibility} />
          </section>
          <Inputform application={this.state.application} submit={this.submit} 
          toggleVisibility={this.toggleVisibility} message={this.state.message}/>
          <Preview application={this.state.application}/>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
