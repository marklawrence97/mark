import React from 'react';
import Header from "./components/header/header";
import Nav from './components/nav/nav';
import Bio from './components/Bio/bio';
import Posts from './containers/Posts/Posts';
import TimeLine from './components/TimeLine/TimeLine';
import Footer from './components/Footer/footer';
import { posts, projects } from './posts';

function App() {
  return (
    <div className="App">
        <Header/>
        <Nav />
        <Bio />
        <Posts title={"Posts"} posts={posts}/>
        <Posts title={"Projects"} posts={projects}/>
        <TimeLine />
        <Footer />
    </div>
  );
}

export default App;
