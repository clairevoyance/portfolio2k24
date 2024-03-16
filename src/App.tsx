import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Experience from './components/Experience/Experience'; // Import Experience component
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter> {/* Wrap your components with Router */}
      <div style={{
        fontFamily: 'sans-serif'
      }}>
        <Header />
        <div style={{
          marginTop: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem'
        }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/experience" Component={Experience} />
            <Route path="/skills" Component={Skills} />
            <Route path="/projects" Component={Projects} />
            <Route path="/contactMe" Component={ContactMe} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
