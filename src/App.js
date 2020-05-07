import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Nav from './components/nav/nav';
import Footer from './components/Footer/footer';
import Profile from './containers/Profile/Profile';
import PostPage from './containers/PostPage/PostPage';
import Error from './error/Error'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Nav />
          <Switch>
            <Route path="/" component={Profile} exact />
            <Route path="/post/:id" component={PostPage} exact/>
            <Route path="/mark/post/:id" component={PostPage} exact/>
            <Route path="/mark" component={Profile} exact />
            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
