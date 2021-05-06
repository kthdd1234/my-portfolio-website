import Home from './Home/Home';
import About from './About/About';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Main = ({ history }) => {
  return (
    <div>
      <Home />
      <About />
      <Education />
      <Projects history={history} />
      <Contact />
    </div>
  );
};

export default Main;
