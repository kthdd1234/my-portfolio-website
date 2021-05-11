import SFCINEMA from '../../../../gallery/SFCINEMA.png';
import sf_app_main from '../../../../gallery/sf-mobile-main.gif';
import sf_app_detail from '../../../../gallery/sf-mobile-detail.gif';
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectIntro from '../components/ProjectIntro';
import ProjectGIF from '../components/ProjectGIF';

const Desc = () => {
  return (
    <div>
      사용자에게 다양한 <span className='project-intro-desc-sf'>SF</span> 영화를
      소개해주는 <span className='project-intro-desc-tomato'>모바일 앱</span>
      입니다.
    </div>
  );
};

const project = {
  contents: {
    position: 'Full-Stack',
    term: '2020년 12월 1일 ~',
    stack: 'React • Node.js • AWS',
    desc: <Desc />,
    backgroundImg: `https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg`,
  },
  logo: {
    img: SFCINEMA,
    width: 'large',
    radius: 'circle',
  },
  link: {
    before: '/projects/sfcinema-web',
    next: '/projects/your-tube',
    more: 'https://github.com/kthdd1234/SF-CINEMA-RN',
  },
  GIF1: {
    width: '20rem',
    title: '메인 화면',
    gif: sf_app_main,
    backgroundColor: '#202a45',
  },
  GIF2: {
    width: '20rem',
    title: '영화 정보 및 하단 텝',
    gif: sf_app_detail,
    backgroundColor: 'rgb(20, 21, 23)',
  },
};

const SFcinemaApp = ({ history }) => {
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

export default SFcinemaApp;
