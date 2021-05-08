import Home from './Home/Home';
import About from './About/About';
import Education from './Education/Education';
import Projects from './Projects/projects/Projects';
import Contact from './Contact/Contact';

const Screen = ({ history }) => {
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

export default Screen;
