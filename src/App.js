import logo from './logo.svg';
import './App.css';
import Navbar from './Components/MiniComponent/Navbar';
import Intro from './Components/Intro/Intro';
import Sidebar from './Components/MiniComponent/Sidebar';
import About from './Components/About/About';
import { useRef } from 'react';
import Skill from './Components/Skill/Skill';
import Projects from './Components/Work/Projects';
import Contact from './Components/Contact/Contact';
import GithubCalender from './Components/GithubCalender/GithubCalender';
import Cursor from './Components/MiniComponent/Cursor';

function App() {

  return (
    <div className="App">
        <Cursor/>
        <Navbar />
        <Intro/>
        <Sidebar/>
        <About  />
        <Skill/>
        <Projects/>
        <GithubCalender/>
        <Contact/>
    </div>
  );
}

export default App;
