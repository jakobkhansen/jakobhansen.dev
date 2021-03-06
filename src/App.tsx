import FrontPage from "frontpage/FrontPage";
import AboutMe from "aboutme/AboutMe";
import "App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "globals/NavBar";
import "semantic-ui-css/semantic.min.css";
import ProjectsPage from "projects/ProjectsPage";
import { Component } from "react";
import ResumePage from "resume/ResumePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
