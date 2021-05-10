import { Switch, Route } from 'react-router-dom';
import Screen from './Screen/Screen';
import SFcinemaWeb from './Screen/Projects/page/pages/SFcinemaWeb';
import SFcinemaApp from './Screen/Projects/page/pages/SFcinemaApp';
import Meetyou from './Screen/Projects/page/pages/Meetyou';
import Yourtube from './Screen/Projects/page/pages/Yourtube';

const list = [
  { path: '/', component: Screen },
  { path: '/projects/sfcinema-web', component: SFcinemaWeb },
  { path: '/projects/sfcinema-app', component: SFcinemaApp },
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
