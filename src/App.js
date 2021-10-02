import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";
import DonatePage from "./Pages/DonatePage";
import TeamPage from "./Pages/TeamPage";
import Footer from "./Components/Footer";
import OneBLogPage from "./Pages/OneBLogPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog:slug" component={OneBLogPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/donate" component={DonatePage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
