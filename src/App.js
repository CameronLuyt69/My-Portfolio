import React, { Component } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import data from "./resumeData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: null,
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    this.setState({ resumeData: data });
  }

  render() {
    const { resumeData } = this.state;

    if (!resumeData) {
      return <div>Loading...</div>;
    }

   return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </div>
      </Route>

      <Route
        path="/portfolio"
        render={() => (
          <>
            <Portfolio data={resumeData.portfolio} headerData={resumeData.main} />
            <Footer data={resumeData.main} />
          </>
        )}
      />

      <Route
        path="/resume"
        render={() => (
          <>
            <Resume data={resumeData.resume} />
            <Footer data={resumeData.main} />
          </>
        )}
      />
    </Switch>
  </Router>
);
  }
}

export default App;
