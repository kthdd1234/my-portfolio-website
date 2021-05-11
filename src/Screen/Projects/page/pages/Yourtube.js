import yourtube_logo from '../../../../gallery/yourtube-small.png';
import yourtube_img from '../../../../gallery/youtube-img.jpg';
import yourtube_login from '../../../../gallery/yourtube-login.gif';
import yourtube_serach from '../../../../gallery/yourtube-serach.gif';
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectIntro from '../components/ProjectIntro';
import ProjectGIF from '../components/ProjectGIF';

const Desc = () => {
  return (
    <div>
      <span style={{ fontFamily: 'Roboto' }}>YouTube</span> 의 좋아요 동영상들을
      관리해주는
      <span style={{ color: 'tomato' }}> 웹사이트</span>
      입니다.
    </div>
  );
};

const project = {
  contents: {
    position: 'Front-End',
    term: '2020년 5월 18일 ~ 5월 29일',
    stack: 'HTML • CSS • JS • React',
    desc: <Desc />,
    backgroundImg: yourtube_img,
  },
  logo: {
    img: yourtube_logo,
    width: 'small',
    radius: 'round',
  },
  link: {
    before: '/projects/sfcinema-app',
    next: '/projects/meet-you',
    more: 'https://github.com/your-tube/client',
  },
  GIF1: {
    width: '45vw',
    title: '로그인 화면',
    gif: yourtube_login,
    backgroundColor: '#202a45',
  },
  GIF2: {
    width: '45vw',
    title: '검색 기능',
    gif: yourtube_serach,
    backgroundColor: 'rgb(20, 21, 23)',
  },
};

const Yourtube = ({ history }) => {
  return (
    <div>
      <ProjectNavBar more={project.link.more} history={history} />
      <ProjectIntro
        contents={project.contents}
        logo={project.logo}
        link={project.link}
        history={history}
      />
      <ProjectGIF GIF={project.GIF1} />
      <ProjectGIF GIF={project.GIF2} />
    </div>
  );
};

export default Yourtube;
