import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import SFcinemaWeb from './ProjectSection/SFcinemaWeb';
import SFcinemaApp from './ProjectSection/SFcinemaApp';
import Meetyou from './ProjectSection/Meetyou';
import Yourtube from './ProjectSection/Yourtube';

const list = [
  { path: '/', component: Main },
  { path: '/projects/sf-cinema-web', component: SFcinemaWeb },
  { path: '/projects/sf-cinema-app', component: SFcinemaApp },
  { path: '/projects/meet-you', component: Meetyou },
  { path: '/projects/your-tube', component: Yourtube },
];

const App = () => {
  return (
    <Switch>
      {list.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component} />
      ))}
    </Switch>
  );
};

export default App;
