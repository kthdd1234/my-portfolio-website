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

const s3 =
  'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com';

const project = {
  contents: {
    position: 'Full-Stack',
    term: '2020년 12월 1일 ~',
    stack: 'React • Node.js • AWS',
    desc: <Desc />,
    backgroundImg: `https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg`,
  },
  logo: {
    img: `${s3}/SFCINEMALogo.png`,
    width: '12rem',
    radious: '300px',
  },
  link: {
    next: '/projects/your-tube',
    more: 'https://github.com/kthdd1234/SF-CINEMA-RN',
  },
  GIF1: {
    width: '20rem',
    title: '메인 화면',
    gif: `${s3}/sf-mobile-main.gif`,
    backgroundColor: '#202a45',
  },
  GIF2: {
    width: '20rem',
    title: '영화 정보 및 하단 텝',
    gif: `${s3}/sf-mobile-detail.gif`,
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
        next={project.link.next}
      />
      <ProjectGIF GIF={project.GIF1} />
      <ProjectGIF GIF={project.GIF2} />
    </div>
  );
};

export default SFcinemaApp;
